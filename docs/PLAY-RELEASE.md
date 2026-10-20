# Renkio 1.0.0 — Google Play yükleme paketi

## Dosyalar

- `renkio-1.0.0.aab`: Play Console'a yüklenecek, yayın anahtarıyla imzalı Android App Bundle.
- `renkio-1.0.0.apk`: aynı AAB'den bundletool ile üretilen, telefonda doğrudan kurulabilen sürüm.
- `upload-certificate.pem`: Play App Signing için herkese açık yükleme sertifikası. Gizli anahtar değildir.
- `store/`: 512×512 ikon, 1024×500 tanıtım görseli, gerçek Android kurulumundan iki adet 1080×1920 ekran görüntüsü.
- `DATA-SAFETY.md`: mevcut uygulamanın veri akışlarına göre form taslağı.
- `SHA256SUMS.txt`: dosya bütünlüğü değerleri.

## Sürüm kimliği

| Alan | Değer |
|---|---|
| Uygulama | Renkio |
| Paket | com.renkio.game |
| Sürüm adı | 1.0.0 |
| Sürüm kodu | 10000 |
| Minimum Android | 8.0 / API 26 |
| Hedef Android | 16 / API 36 |
| İzinler | INTERNET |
| Reklam / satın alma SDK'sı | Yok |
| Hesap / giriş | Yok |

Android paketi HTML, CSS, oyun motoru ve bot Worker'ını kendi içinde taşır. Tek kişilik oyun internet olmadan çalışır. Çevrim içi oyun aynı HTTPS sunucusunu kullanan tarayıcılarla 2–4 kişilik çapraz oyun sunar. Google Play incelemesi veya yayın onayı bu paketle verilmiş olmaz.

## Play Console'da kalan işlemler

1. Kendi geliştirici hesabında Renkio adında **Oyun** oluştur. Kimlik ve hesap doğrulamalarını tamamla. Bu çalışma hesabına giriş yapmadı, sözleşme kabul etmedi veya uygulamayı yayımlamadı.
2. Destek e-posta adresini gir. Adres henüz kullanıcı tarafından verilmedi; hiçbir e-posta uydurulmadı. Varsa geliştirici web sitesi: `https://qwirkle-masa.onrender.com/`.
3. Gizlilik URL'si: `https://qwirkle-masa.onrender.com/privacy.html`. Aynı metin uygulamadaki Ayarlar > Gizlilik altında da bulunur. Şimdiki iletişim mekanizması geliştiricinin GitHub bildirim sayfasıdır. İstersen destek e-postasını ayrıca ekle.
4. Mağaza metinlerini ve `store/` görsellerini ekle. Uygulama erişimi için üyelik veya test hesabı gerekmiyor.
5. Reklam beyanını **Hayır** olarak doldur. Veri güvenliği, içerik derecelendirmesi ve hedef kitle formlarını uygulamanın gerçek kullanımı ve işletme bilgilerinle tamamla. Sohbet ve kullanıcı mesajlarını gizleme; yaş derecesini ben senin adına seçmedim.
6. Play App Signing'i etkinleştirip `renkio-1.0.0.aab` dosyasını önce dahili test kanalına yükle. Sürüm adı `1.0.0`, kodu `10000` görünmeli. Paket adını sonraki sürümlerde değiştirme.
7. Ön lansman raporunu kontrol et. Hesabın yeni kişisel geliştirici hesabı kapsamındaysa Google, üretim erişiminden önce en az 12 testçinin 14 gün kesintisiz katıldığı kapalı test isteyebilir. Bu hesap koşulu AAB oluşturularak aşılmaz.
8. Formlar, test koşulları ve Google incelemesi tamamlanınca üretim yayınına geç. Ücret ve ülke seçimini sahibi yapmalıdır.

## Mağaza metni (TR)

**Ad:** Renkio

**Kısa açıklama:** Arkadaşlarınla çevrim içi veya bilgisayara karşı oynanan taş oyunu.

**Tam açıklama:**
Renkio, renk ve şekilleri eşleştirerek puan kazandığın bir taş oyunudur.

- 2–4 kişilik özel çevrim içi masalar
- Android ve tarayıcı arasında çapraz oyun
- İnternetsiz bilgisayara karşı oyun ve isteğe bağlı ipucu
- Tur süresi seçenekleri, hamle geçmişi ve hızlı mesajlar
- Açık ve koyu tema

Çevrim içi mod internet bağlantısı gerektirir.

**Sürüm notu:** İlk Android sürümü. Çevrim dışı tek kişilik oyun, çevrim içi özel masalar, çapraz oyun ve uyarlanabilir arayüz.

**Ekran görüntüsü alternatif metinleri:**
- phone-menu.png: Oyuncu adı, arkadaşlarla veya bilgisayara karşı oyun seçenekleri ve masa kurma alanı.
- phone-game.png: Oyun tahtası, iki oyuncunun puanı, tek sırada altı taş ve büyük hamle onay düğmesi.
- feature-1024x500.png: Renkio adı ve dört renkli kareden oluşan uygulama simgesi.

## İnceleyici talimatı

Uygulamayı açıp bir oyuncu adı girin. **Bilgisayar > Miko ile oyna** yoluyla internetsiz mod denenebilir. İpucu düğmesine basıp öneriyi uygulayabilir ve onay simgesiyle hamleyi oynayabilirsiniz. Çevrim içi mod için **Arkadaşlarla > Masa kur** seçin; kodu başka bir Android cihazında veya `https://qwirkle-masa.onrender.com/` adresindeki tarayıcıda kullanarak katılın. Masa sahibi tur süresini seçip Başlat'a basar. Kullanıcı hesabı veya ödeme gerekmez. Sunucu ücretsiz planda olduğu için ilk bağlantı uyanma gecikmesi yaşayabilir.

## İmza ve güvenlik

Yükleme anahtarı ile şifreler bu klasöre ve GitHub'a konulmadı. Ayrı yerel klasör: `../renkio-v1-signing/`. Bu klasördeki `.p12` ve `signing.json` dosyalarını güvenli şekilde yedekle; herkese açık paylaşma ve Play mağaza görselleriyle birlikte yükleme. Play'e yalnızca AAB'yi, gerektiğinde herkese açık PEM sertifikasını ver. Sonraki güncellemeler aynı yükleme anahtarıyla ve daha büyük sürüm koduyla hazırlanmalıdır.

Kaynak depodaki `scripts/build-release.ps1`, özel imza dosyasını bu ayrı klasörden okuyarak paketi yeniden üretir. Anahtar şifreleri komut çıktısına yazdırılmaz. APK'yı daha önceki test imzalı 0.4 sürümünün üzerine kuramazsın; Play sürümüne geçerken imza uyuşmazlığı varsa eski test uygulaması kaldırılmalıdır. Bu, eski test kurulumundaki yerel kayıtları siler.

## İşletim notu

Ücretsiz Render altyapısı korundu. Sunucu uyuyabilir ve yeniden başlatmada çevrim içi masalar kaybolabilir; ücretli altyapı kurulmadı. Tek kişilik Android oyunu bundan etkilenmez. Sohbet bildirimleri sunucunun `MODERATION_REPORT` kayıtlarına iletilir; işletmeci bu bildirimleri incelemeli ve gerektiğinde müdahale etmelidir. Bildirim/engelleme düğmeleri tek başına işletim sorumluluğunun yerine geçmez.

## Resmî kaynaklar

- Hedef API: https://developer.android.com/google/play/requirements/target-sdk
- Uygulama imzalama: https://developer.android.com/studio/publish/app-signing
- Bundletool: https://developer.android.com/tools/bundletool
- Gizlilik gereklilikleri: https://support.google.com/googleplay/android-developer/answer/10144311
- Mağaza görselleri: https://support.google.com/googleplay/android-developer/answer/9866151
- Yeni kişisel hesap test koşulları: https://support.google.com/googleplay/android-developer/answer/14151465
