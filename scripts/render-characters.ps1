param(
 [Parameter(Mandatory=$true)][string]$Godot,
 [string]$Python='python',
 [string]$Frames=(Join-Path $PSScriptRoot '../art/character-studio/renders')
)
$ErrorActionPreference='Stop'
$projectRoot=(Resolve-Path (Join-Path $PSScriptRoot '../art/character-studio')).Path
$renderOutput=[System.IO.Path]::GetFullPath($Frames)
New-Item -ItemType Directory -Force -Path $renderOutput | Out-Null
$previousOutput=$env:RENKIO_ART_OUTPUT
try {
 $env:RENKIO_ART_OUTPUT=$renderOutput
 & $Godot --headless --path $projectRoot --editor --import --quit
 if($LASTEXITCODE -ne 0){throw 'Godot project import failed.'}
 $renderArgs=@('--path',('"'+$projectRoot+'"'),'--rendering-method','gl_compatibility','--resolution','64x64','--position','-3000,-3000','--','--render')
 $renderProcess=Start-Process -FilePath $Godot -ArgumentList $renderArgs -WindowStyle Hidden -Wait -PassThru -RedirectStandardOutput (Join-Path $renderOutput 'render.log') -RedirectStandardError (Join-Path $renderOutput 'render.err')
 if($renderProcess.ExitCode -ne 0){throw 'Godot character rendering failed.'}
 & $Python (Join-Path $PSScriptRoot 'pack_godot_characters.py') --frames $renderOutput
 if($LASTEXITCODE -ne 0){throw 'Character quality gate failed; assets are not ready to publish.'}
} finally {
 if($null -eq $previousOutput){Remove-Item Env:RENKIO_ART_OUTPUT -ErrorAction SilentlyContinue}else{$env:RENKIO_ART_OUTPUT=$previousOutput}
}
