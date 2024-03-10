// yup'taki bütün fonksiyonları import et,
// '*' her şeyi yup'tan import et demek, 'as yup' ise import ettiklerini yup olarak tanımla demek
import * as yup from "yup"

// validasyon şeması
// görevi, formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan.

// yup.object().shape --> burası kalıp yapı
// * bir alan için koşulları yazarken ilk olarak o alanın tipini tanımlayan
// yup fonksiyonunu çağırırız 
export const schema = yup.object().shape({
    // email'in geçerli olması için koşullar
    email: yup.string().email().required(),
    // yaşın geçerli olması için koşullar, integer()->tam sayı
    age: yup.number().min(18).max(100).integer().required(),
})




