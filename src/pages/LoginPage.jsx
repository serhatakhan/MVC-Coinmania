import { useFormik } from "formik";
import { schema } from "../schema";
import InputFieldView from "../views/InputFieldView";
import { inputs } from "../constants";

const LoginPage = () => {
  // formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    // Hata yönetimi için,
    // * Validasyon Şeması tanımlamalıyız.
    // * inputlardaki verileri, tanımladığımız şemadaki koşullara uygun mu diye kontrol eder
    // eğer geçerli değilse error state'ine hataları ekler.
    validationSchema: schema,

    // form gönderilince çalışacak fonksiyon,
    // Otomatik olarak sayfa yenilemeyi engeller.
    // 1.parametre(values), formdaki verileri alır.
    // 2.parametre(actions), formda çalışabilecek aksiyonları alır.(örn reset aksiyonu. sıfırlar)
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

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

          <button type="submit" className="btn enter">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

// css ayarlamalarını yaptıktan sonra &nbsp; ie bir boşluk koyduk ki uyarı mesajı çıktığında
// kayma olmasın !!

export default LoginPage;
