import "./Login.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";

function Login() {
    return(
        <section className="login">
            <Link to="/"><img className="login__logo" src={logo} alt="логотип" /></Link>
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form">
                <label className="login__field">
                    E-mail
                    <input className="login__input login__input_email" type="email" 
                    name="email" placeholder="Почта" required />
                    <span className="login__input-error email-input-error"></span>
                </label>
                <label className="login__field">
                    Пароль
                    <input className="login__input login__input_password" type="password" 
                    name="password" placeholder="Пароль" minLength="2" maxLength="30" required />
                    <span className="login__input-error password-input-error"></span>
                </label>
                <button type="submit" className="login__submit">Войти</button>
            </form>
            <div className="login__container">
                <p className="login__text">Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="login__link">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;