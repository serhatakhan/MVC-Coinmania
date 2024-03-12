import { useFormik } from "formik";
import { schema } from "../schema";

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

  // erişimi kolay olsun diye formik'in içindeki hataları err'e attık
  const err = formik.errors;
  // onBlur olayında, formik'in kendi içinde tuttğu hata yönetim state'i diyebiliriz. formik'i konsola yazdığımzda görebiliyoruz
  const touched = formik.touched;

  return (
    <div className="container-login">
      <div className="card-login">
        <div className="card-login2 d-flex gap-2 justify-content-center align-items-center">
          <img className="mt-4" height={60} src="/c-logo.png" />
          <span className="singup mb-1">Coinmania</span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="inputBox1">
            {/* inputtan odak kaybetme anını izliyoruz onBlur ile. dışarı veya başka bir yere tıklanınca yani */}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="email"
              type="email"
              required
              className={`${err.email && touched.email ? "is-invalid" : ""}`}
            />
            {/* eğer hata varsa ve o inputa dokunduysak hatayı göster demiş olduk(is-invalid, bootstrapin classı) */}
            <label className="user">Email</label>
            <div className="feedback">{err?.email} &nbsp; </div>
          </div>

          <div className="inputBox">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="age"
              type="number"
              required
              className={`${err.age && touched.age ? "is-invalid" : ""}`}
            />
            <label>Yaş</label>
            <div className="feedback">{err?.age} &nbsp;</div>
          </div>

          <div className="inputBox">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="password"
              type="text"
              required
              className={`${err.password && touched.password ? "is-invalid" : ""}`}
            />
            <label>Şifre</label>
            <div className="feedback">{err?.password} &nbsp;</div>
          </div>

          <div className="inputBox1">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="passwordConfirm"
              type="text"
              required
              className={`${err.passwordConfirm && touched.passwordConfirm ? "is-invalid" : ""}`}
            />
            <label>Şifre Onay</label>
            <div className="feedback">{err?.passwordConfirm} &nbsp;</div>
          </div>

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
