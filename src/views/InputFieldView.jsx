const InputFieldView = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div className="inputBox">
      {/* inputtan odak kaybetme anını izliyoruz onBlur ile. dışarı veya başka bir yere tıklanınca yani */}
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
        required
        className={`${
          formik.errors[name] && formik.touched[name] ? "is-invalid" : ""
        }`}
      />
      {/* eğer hata varsa ve o inputa dokunduysak hatayı göster demiş olduk(is-invalid, bootstrapin classı) */}
      <label className="user">{label}</label>
      <div className="feedback">{formik.errors[name]} &nbsp; </div>
    </div>
  );
};

// * formik.errors[name] --> BURADAKİ KÖŞELİ PARANTEZ OLAYI,
// NESNENİN İÇİNDEKİ BİR DEĞERE DİNAMİK BİR ŞEKİLDE ERİŞMEMİZİ 
// SAĞLAYAN JAVASCRIPT YÖNTEMİDİR. formik.errors.name olmazz.

export default InputFieldView;
