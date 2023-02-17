import { useState } from "react";

function Login({handleLogin}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
    
        setUserData({
          ...userData,
          [name]: value,
        });
      }

      function handleSubmit(e){
        e.preventDefault();
        if (!userData.email || !userData.password) {
          return;
        }
    
        handleLogin(userData)
          .then(() => {
            setUserData({ email: "", password: "" });
          })
          .catch((error) => {
            console.log(`Что-то пошло не так! ${error} `);
          });
      }

  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <form name='login' className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="login__input login__input_data_email"
          placeholder="Email"
          required
          id="email-input"
          onChange={handleChange}
          value={userData.email || ""}
        />
        <span className="login__error email-input-error"></span>
        <input
          type="password"
          name="password"
          className="login__input login__input_data_password"
          placeholder="Пароль"
          required
          minLength="2"
          id="password-input"
          onChange={handleChange}
          value={userData.password || ""}
        />
        <span className="login__error password-input-error"></span>
        <button className="login__button" type="submit" aria-label="Войти">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
