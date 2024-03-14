import millify from "millify";
import { useNavigate } from "react-router-dom";

const CardView = ({ data }) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/coin/${data.id}`)} className="container-crd noselect">
      <div className="canvas">
        <div className="tracker tr-1"></div>
        <div className="tracker tr-2"></div>
        <div className="tracker tr-3"></div>
        <div className="tracker tr-4"></div>
        <div className="tracker tr-5"></div>
        <div className="tracker tr-6"></div>
        <div className="tracker tr-7"></div>
        <div className="tracker tr-8"></div>
        <div className="tracker tr-9"></div>
        <div className="tracker tr-10"></div>
        <div className="tracker tr-11"></div>
        <div className="tracker tr-12"></div>
        <div className="tracker tr-13"></div>
        <div className="tracker tr-14"></div>
        <div className="tracker tr-15"></div>
        <div className="tracker tr-16"></div>
        <div className="tracker tr-17"></div>
        <div className="tracker tr-18"></div>
        <div className="tracker tr-19"></div>
        <div className="tracker tr-20"></div>
        <div className="tracker tr-21"></div>
        <div className="tracker tr-22"></div>
        <div className="tracker tr-23"></div>
        <div className="tracker tr-24"></div>
        <div className="tracker tr-25"></div>
        <div id="coin-card">
          <div className="prompt">
            <h3 className="text-dark">{data.name}</h3>
            <h6 className="text-dark">{data.symbol}</h6>
            <p className="text-dark">$ {millify(data.priceUsd)}</p>
            <p className="text-dark fw-medium">
              <span className="text-dark">Günlük Değişim:</span>
              <span className={data.changePercent24Hr >=0 ? "up" : "down"}> %{Number(data.changePercent24Hr).toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
