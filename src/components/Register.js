import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({ email: userData.email, password: userData.password });
  }

  return (
    <div className="Register">
      <h1 className="Register__title">Вход</h1>
      <form name="Register" className="Register__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="Register__input Register__input_data_email"
          placeholder="Email"
          required
          id="email-input"
          onChange={handleChange}
          value={userData.email || ""}
        />
        <span className="Register__error email-input-error"></span>
        <input
          type="password"
          name="password"
          className="Register__input Register__input_data_password"
          placeholder="Пароль"
          required
          minLength="2"
          id="password-input"
          onChange={handleChange}
          value={userData.password || ""}
        />
        <span className="Register__error password-input-error"></span>
        <button
          className="Register__button"
          type="submit"
          aria-label="Зарегистрироваться"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="Register__subtitle">
        Уже зарегистрированы? 
        <Link className="Register__login" to="sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
