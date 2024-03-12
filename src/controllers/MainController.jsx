import { useEffect, useState } from "react"
import MainView from "../views/MainView"
import MainModel from "../models/MainModel"

const MainController = () => {
  // gelen coin bilgilerini view'a aktarabilemk için bunları state'e aktar
  const [coins, setCoins] = useState([])
  // kullanıcıya kaçıncı sayfadaki verileri göstereceğimizin state'ını tut
  const [page, setPage] = useState(1)

  useEffect(()=>{
    MainModel.getCoins(page)
    .then((data)=> setCoins(coins.concat(data))) // mevcut coinsteki veriler kalsın, yeni aldığım verileri(data) mevcutların peşine ekle !! concat kullandık çünkü coins bir dizi.
  }, [page])
  // * page'ı bağımlılık dizisine ekleyerek sayfa sayısı her arttığında 
  // sonraki sayfanın verilerini almak istedik. sonra da getCoins() fonk'a
  // parametre olarak page'i gönderdik. sonra da fonksiyona gidip bunu parametre olarak aldık.
  // * sonra offset'te doğru bir tanım yaparak her tıklandığında sonraki sayfanın verisini al

  return (
    <MainView coins={coins} setPage={setPage} />
    // artırma özelliğini sağlamak için setPage'i prop olarak ver
  )
}

export default MainController