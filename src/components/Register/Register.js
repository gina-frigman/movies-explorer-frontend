import "./Register.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";

function Register() {
    return(
        <section className="register">
        <Link to="/"><img className="register__logo" src={logo} alt="логотип" /></Link>
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form">
                <label className="register__field">
                    Имя
                    <input className="register__input register__input_name" 
                    name="name" placeholder="Имя" required minLength="2" maxLength="30" />
                    <span className="register__input-error name-input-error"></span>
                </label>
                <label className="register__field">
                    E-mail
                    <input className="register__input register__input_email" type="email" 
                    name="email" placeholder="Почта" required />
                    <span className="register__input-error email-input-error"></span>
                </label>
                <label className="register__field">
                    Пароль
                    <input className="register__input register__input_password" type="password" 
                    name="password" placeholder="Пароль" minLength="2" maxLength="30" required />
                    <span className="register__input-error password-input-error"></span>
                </label>
                <button type="submit" className="register__submit">Зарегистрироваться</button>
            </form>
            <div className="register__container">
                <p className="register__text">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="register__link">Войти</Link>
            </div>
        </section>
    )
}

export default Register;