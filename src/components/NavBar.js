import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
      <div className="navbar">
        {location.pathname === "/sign-in" && <Link className="navbar__link" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/sign-up" && <Link className="navbar__link" to="/sign-in">Войти</Link>}        
      </div>
  );
}

export default NavBar;
