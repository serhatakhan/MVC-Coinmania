// yup'taki bütün fonksiyonları import et,
// '*' her şeyi yup'tan import et demek, 'as yup' ise import ettiklerini yup olarak tanımla demek
import * as yup from "yup";

// validasyon şeması
// görevi, formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan.

// 1 büyük harf, bunların hepsi minimum tabi
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// yup.object().shape --> burası kalıp yapı
// * bir alan için koşulları yazarken ilk olarak o alanın tipini tanımlayan
// yup fonksiyonunu çağırırız
export const schema = yup.object().shape({
  // email'in geçerli olması için koşullar
  email: yup
    .string()
    .email("Email geçerli bir formatta olmalıdır")
    .required("Email zorunlu bir alandır"),

  // yaşın geçerli olması için koşullar, integer()->tam sayı
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Yaşınızı tam sayı olarak giriniz")
    .required("Yaş zorunlu bir alandır"),

  // şifrenin geçerli olması için koşullar
  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter içermeli")
    // şifre, regex kurallarına uygun mu kontrol eder matches
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alandır"),

  // şifre onay alanının geçerli olması için koşullar
  passwordConfirm: yup
  .string()
  // oneOf(), kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder,
  // ref(), farklı bir inputtaki veriye erişmemizi sağlar.
  .oneOf([yup.ref("password")], "Şifreniz eşleşmiyor")
  .required("Lütfen şifrenizi onaylayın"),
});
