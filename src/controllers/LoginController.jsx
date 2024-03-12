import { useFormik } from "formik";
import { schema } from "../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate()

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
      navigate("/home")
    },
  });

  return <LoginView formik={formik} />;
};

export default LoginController;
