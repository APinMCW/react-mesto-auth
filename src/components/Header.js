import logo from "../images/logo.svg";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Место" />
      <NavBar/>
    </header>
  );
}
export default Header;
