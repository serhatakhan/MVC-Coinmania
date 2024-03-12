import { inputs } from "../constants";
import InputFieldView from "./InputFieldView";

const LoginView = ( {formik} ) => {
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="card-login2 d-flex gap-2 justify-content-center align-items-center">
          <img className="mt-4" height={60} src="/c-logo.png" />
          <span className="singup mb-1">Coinmania</span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button type="submit" className="enter">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
