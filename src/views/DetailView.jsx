import millify from "millify";
import { Chart as Chartjs } from "chart.js/auto"
import { Line, Bar } from "react-chartjs-2";

const DetailView = ({ model }) => {

  // dökümantasyona göre bizden istenen veri bu şekilde
  /*const veri = {
    labels: ["asdasda", "dsdfsf", "sddssd"],
    datasets: [
      {id:1, label: "fiyat", data: [30,40,60], borderColor: "red", backgroundColor: "red"}
    ]
  }*/


  return (
    <div className="overflow-x-hidden">
      <h3 className="text-center text-dark">
        <span className="me-2 fs-4 fw-bold coin-symbol-clr">{model.coin?.detail.symbol}</span>
        <span className="fs-2">{model.coin?.detail.name}</span>
      </h3>

      <div className="row px-3">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-3">
          {model?.infoFields.map((item, i) => (
            <div key={i} className="text-bg-light rounded shadow-lg text-center p-3">
              <span className="fs-2">{item.icon}</span>
              <h4>{item.label}</h4>
              <p className="fw-semibold">{millify(item.value)}</p>
            </div>
          ))}
        </section>

        <section className="col-md-9 d-flex flex-column gap-5 p-5 p-md-4">
          <Line data={model?.graphicData} />
          <Bar data={model?.graphicData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
