import axios from "axios";

// ana sayfanın model katmanı
export default class MainModel {
  // api'den coin verilerini alır
  static async getCoins(page) {
    try {
      // * Api sayfalama yapmayı destekliyor. limit ve offset parametrelerini kullanacağız
      // * Bunları kolay yönetmek için, gönderilecek parametreleri nesne şeklinde tanımladık.
      // * Anlamları: 0. elemandan itibaren 15 tane elemanı al.
      const params = {
        offset: (page - 1) * 15,    // kaç veri atlanacak
        limit: 15,                  // kaç veri alınacak
      };
      const res = await axios.get("https://api.coincap.io/v2/assets", {params});
      // virgül koyup parantez açıp içine yazdığımız params değişkenini koyduğumuzda, istek atarken bu parametreleri kullan demiş oluyoruz. 

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}




/*
 * Normalde class'ın bir örneğini oluşturup içindeki fonksiyona öyle 
 erişiyorduk. Yani:
    const model = new MainModel()
    model.getCoins() şeklinde
*/
/*
 * fonksiyonun başına yazdığımız 'static' anahtar kelimesi sayesinde
o class üzerinden direk o fonksiyona erişmeye olanak sağlıyor.
    MainModel.getCoins() şeklinde
*/
