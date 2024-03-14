import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  // class'larda inşa edici metot. class'tan alınan örneklerde elde edilen veriyi temsil eder.
  constructor(coin) {
    // coin verilerini class'tan alınacak örneğin içine gönder
    this.coin = coin;
    // detay verilerinden oluşan bir diziyi de class'tan alınacak örneğin içine gönder
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24s Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];
    // grafik için kullanılacak veriyi de class'tan alınacak örneğin içine gönder(react-chartjs dökümantasyonu bu veri formatında istiyor)
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
  }

  // api'den hem fiyat hem detay verisini al
  static async getCoin(id) {
    // BİRDEN FAZLA API İSTEĞİNİ AYNI ANDA ATMA
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    // fonksiyonun çağırıldığı yere nesne içinde gönderdik cevapları
    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
