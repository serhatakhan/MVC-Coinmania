import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center ">
      <Link to={"/"} className="d-flex gap-2 align-items-center text-decoration-none">
        <img src="/c-logo.png" height={42} alt="" />
        <h3 className="text-dark mt-1">COINMANIA</h3>
      </Link>

      <nav className="d-flex gap-3 fw-medium">
        <NavLink to={"/"} className="text-dark text-decoration-none">Giriş Yap</NavLink>
        <NavLink to={"/home"} className="text-dark text-decoration-none">Ana Sayfa</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
