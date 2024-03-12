import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";

const MainView = ({ coins, setPage }) => {
  return (
    <div className="container-xl mt-4">
      <h4 className="d-flex align-items-center gap-2 text-dark">
        <FaBitcoin />
        <span className="fw-bold">Coinmania'ya Hoş Geldiniz</span>
      </h4>

      <p className="text-dark">
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır.
      </p>

      <div className="d-flex justify-content-around p-3">
        {coins?.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      {/* Tablo */}
      <table className="table table-striped table-hover table-responsive mt-5">
        <thead className="text-dark fw-bold">
          <th>#</th>
          <th>Coin</th>
          <th>Fiyat</th>
          <th>Market Hacmi</th>
          <th>İşlem Hacmi</th>
          <th>% Değişim (24s)</th>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="fw-medium">
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-1">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>$ {millify(coin.priceUsd)}</td>
              <td>$ {millify(coin.marketCapUsd)}</td>
              <td>$ {millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                % {Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Daha Fazla Butonu */}
      <div className="d-flex align-items-center justify-content-center mb-3">
        <button onClick={()=> setPage((prev)=> prev + 1)} className="btn-more"> Daha Fazla</button>
      </div>
      {/* bu butona her tıklandığında MainController'da tuttuğumuz mevcut sayfa sayısını 1 arttırsın istiyoruz */}
      {/* prev yöntemiyle (set metotları bir fonksiyon alabiliyordu. bu fonksiyonun aldığı parametre ile state'ın son değerine erişebiliyoruz.) */}
      {/* prev yöntemiyle, MAinController'da tuttuğumuz mevcut sayfa state'ını buraya prop olarak yollamaya gerek kalmadı. */}
    </div>
  );
};

export default MainView;
