# Eşleştirme ve hesaplar

- Aynı kuyruk: tarayıcı ve Android. Tek hesap bir aktif eşleşmeye sahip olabilir.
- FIFO insan eşleşmesi; 180 saniye sonrası beş bottan uygun olanı. Bot başına tek aktif maç.
- Kuyruk heartbeat 2 saniye; 35 saniye bağlantısız kalan arama düşer. İptal/eşleşme yarışı bulunan maçı döndürür.
- 60 saniye tur; iki insan zaman aşımı maçı bırakma sayılır. Maçı terk etme botu serbest bırakır.
- Bot hesaplaması node worker_threads içinde, revizyon kontrollü. Sunucu elleri gizli tutar.
- Firebase Authentication projesi qwirkle-v-selman, Spark ücretsiz. E-posta/şifre, anonim ve Google etkin.
- JWT RS256 imza, issuer, audience, expiry ve auth_time kontrolü. Yeni aramada Firebase hesap varlığı da kontrol edilir.
- Oyuncu ID’si Firebase UID’nin SHA-256 özetinden türetilen 12 basamaklı tanımlayıcıdır; esas hesap anahtarı Firebase UID’dir. Takma adlar Firebase Authentication displayName alanında saklanır. Görünen adlar benzersiz olmak zorunda değildir.
- Google GSI, sistem tarayıcısında ham Google ID token üretir; Renkio Firebase hesabını cihazda bağlar. Böylece yeni bir Google bağlantısı misafir UID’sini korur. Kayıtlı hesaba giriş o hesabın UID’sine geçer.
- Google tek kullanımlık aktarımı 3 dakika geçerli; nonce, imza, audience ve ayrı poll anahtarı ile doğrulanır. Kimlik bilgileri yalnızca bellekte tutulur, loglanmaz.
- Hesap silme, Firebase Authentication kaydını ve sunucudaki ilişkili masaları siler; şifre/credential depoda tutulmaz.
- Render ücretsiz sunucu masaları geçicidir. Hesap/nick Firebase’de kalır. Botlar yapay oyuncu olarak işaretlenir.

## Doğrulama

npm test: engine, dört oyuncu, kuyruk sınırı, iptal yarışı, üç dakika sınırı, worker botu, HTTP yetkilendirmesi.
Gerçek Firebase QA: anonimden e-posta hesabına ID koruma, ayrı cihaz oturumu, takma ad, gerçek imzalı token, insan eşleşmesi, el gizliliği, terk, hesap silme.
Google GSI gerçek kullanıcı onayı kullanıcı tarafından tamamlanmalıdır; testler kullanıcı adına Google onayı vermez.
