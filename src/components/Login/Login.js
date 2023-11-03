import "./Login.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="login">
            <img className="login__logo" src={logo} alt="логотип" />
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form">
                <label className="login__field">
                    <p className="login__title">E-mail</p>
                    <input className="login__input login__input_email" type="email" 
                    name="email" required />
                    <span className="login__input-error email-input-error"></span>
                </label>
                <label className="login__field">
                    <p className="login__title">Пароль</p>
                    <input className="login__input login__input_password" type="password" 
                    name="password" required />
                    <span className="login__input-error password-input-error"></span>
                </label>
                <button type="submit" className="login__submit">Войти</button>
            </form>
            <div className="login__container">
                <p className="login__text">Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="login__link">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;