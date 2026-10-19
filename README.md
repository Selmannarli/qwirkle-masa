# Qwirkle Masa

Türkçe, 2–4 kişilik çevrim içi Qwirkle uyarlaması. Node.js 20+ dışında bağımlılık gerektirmez.

## Çalıştırma

`npm start` komutundan sonra http://localhost:4173 adresini açın. Farklı cihazlar aynı sunucuya bağlanmalıdır. Aynı Wi-Fi ağında bilgisayarın yerel IP adresi ve 4173 portu kullanılabilir. İnternet üzerinden oynamak için sunucuyu Render gibi bir Node.js barındırıcısında çalıştırın. `render.yaml` ücretsiz Frankfurt servisi için hazırdır.

1. Oyuncu adınızı yazın ve **Yeni oda kur** seçin.
2. Davet bağlantısını arkadaşınıza gönderin.
3. 2–4 kişi odadayken oda sahibi oyunu başlatır.
4. Taşa ve masadaki boş hücreye dokunun; ardından **Hamleyi oyna** seçin.

Fareyle sürükleme, tekerlekle yakınlaştırma, dokunarak yerleştirme ve iki parmakla yakınlaştırma desteklenir. 1–6 tuşları taş seçer, Enter hamleyi oynar, Escape hazırlanan hamleyi temizler. İpucu yalnızca öneri hazırlar; otomatik oynamaz.

## Kurallar

108 taş; aynı renkte farklı şekiller veya aynı şekilde farklı renkler. Bir turdaki taşlar tek kesintisiz çizgide olmalı; bütün dikey ve yatay çizgiler geçerli olmalı. Altılı çizgi +6 bonusla 12 puandır. Son taşı bitirmek +6 verir. Açılışta en büyük eşleşen grup oynanır. Yaş bilgisi alınmadığı için başlangıç eşitliği oda sırasıyla çözülür. Torba boşken hamlesi olmayan oyuncu pas geçer; herkes pas geçerse oyun biter.

## Mimari ve kayıt

Sunucu hamleleri doğrular ve SSE ile anlık durum gönderir. İstemciye yalnızca kendi eli gönderilir. Oyuncu oturumu 192 bit rastgele anahtarla doğrulanır; tarayıcıda saklanır. Sayfa yenilendiğinde **Devam eden masama dön** ile bağlanılır. `data/rooms.json` oda durumlarını saklar ve Git'e dahil edilmez. Oda kayıtları 7 gün sonra temizlenir. Tek sunucu örneğiyle çalıştırılmalıdır. Render ücretsiz planda dosya sistemi kalıcı değildir; yeniden dağıtım/uyandırma sonrasında oda kaybı olabilir. Kalıcı disk için `QWIRKLE_DATA` değişkeni kullanılabilir. Ücretsiz sunucunun ilk açılması zaman alabilir.

Bilgisayara karşı antrenman tarayıcı belleğinde çalışır; sayfa kapatıldığında sıfırlanır. Çevrim içi oyun sunucuda tutulur. Uygulama bağımsız bir dijital uyarlamadır; Qwirkle ve ilgili marka hakları sahiplerine aittir.

## Doğrulama

`npm test`: kurallar, çapraz puanlama, çift Qwirkle, tekrar taş yasağı, açılış, değişim, bitiş ve tam oyun boyunca taş bütünlüğü. Sunucu testleri gizli elleri, oda sahibi yetkisini, sıra doğrulamasını, SSE güncellemelerini ve yeniden bağlantıyı kapsar.
