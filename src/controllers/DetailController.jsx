import { useParams } from "react-router-dom"
import DetailView from "../views/DetailView"
import { useEffect, useState } from "react"
import DetailModel from "../models/DetailModel"

const DetailController = () => {
  // gelen veriyi kullanmamız gerekiyor o yüzden state'e aktar
  const [coin, setCoin] = useState(null)

  // 1) url'den id'yi al
  const {id} = useParams()

  // 2) coin'in detay verilerini ve fiyat geçmişini api'den al
  useEffect(()=>{
    DetailModel.getCoin(id)
    .then((data)=> setCoin(data))
  }, [])


  // * class'tan örnek al, yani bir kopyasını oluştur demek (constructor içinde kullanmak için).
  // * constructor metodu otomatik şekilde çalışıp, constructor'da kaydedilen veriler varsa
  // burada oluşturulan nesnede, o verilere erişmeyi sağlıyor. 
  // * bu yeni oluşturulan nesnede, constructor bloğu ile birlikte detay verilerini işleyip
  // bir diziye çevirmek istiyoruz. o yüzden model'in constructor'ına coin'in bilgilerini gönderdik.
  // * bu şekilde örnek alındıktan sonra DetailModel tarafına constructor bloğuna coin'in bilgileri gelecek. 
  const model = new DetailModel(coin)

  /** classtan aldığımız örneği konsola yazdığımzda coin ve infoFields var. yani constructor içindekiler.
  console.log(model) **/

  return (
    <DetailView model={model} />
  )
}

export default DetailController