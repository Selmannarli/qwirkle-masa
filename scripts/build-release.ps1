param([string]$SigningFile = (Join-Path $PSScriptRoot '..\..\renkio-v1-signing\signing.json'))
$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path $PSScriptRoot -Parent
$taskSigning = Get-Content -LiteralPath $SigningFile -Raw | ConvertFrom-Json
$env:RENKIO_STORE_FILE = $taskSigning.storeFile
$env:RENKIO_STORE_PASSWORD = $taskSigning.storePassword
$env:RENKIO_KEY_ALIAS = $taskSigning.keyAlias
$env:RENKIO_KEY_PASSWORD = $taskSigning.keyPassword
try {
 Push-Location (Join-Path $taskRoot 'android')
 & .\gradlew.bat --no-daemon bundleRelease assembleRelease lintRelease assembleDebug assembleDebugAndroidTest
 if ($LASTEXITCODE -ne 0) { throw 'Android release build failed.' }
 $taskVersion = (Get-Content (Join-Path $taskRoot 'package.json') -Raw | ConvertFrom-Json).version
 $taskOutput = Join-Path $taskRoot ('..\renkio-' + $taskVersion)
 New-Item -ItemType Directory -Force $taskOutput | Out-Null
 Copy-Item -LiteralPath 'app\build\outputs\bundle\release\app-release.aab' -Destination (Join-Path $taskOutput ('renkio-' + $taskVersion + '.aab'))
 Copy-Item -LiteralPath 'app\build\outputs\apk\release\app-release.apk' -Destination (Join-Path $taskOutput ('renkio-' + $taskVersion + '.apk'))
} finally {
 Pop-Location
 Remove-Item Env:RENKIO_STORE_PASSWORD,Env:RENKIO_KEY_PASSWORD,Env:RENKIO_STORE_FILE,Env:RENKIO_KEY_ALIAS -ErrorAction SilentlyContinue
}
