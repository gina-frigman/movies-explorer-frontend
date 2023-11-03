import "./Register.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";

function Register() {
    return(
        <div className="register">
            <img className="register__logo" src={logo} alt="логотип" />
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form">
                <label className="register__field">
                    <p className="register__title">Имя</p>
                    <input className="register__input register__input_name" 
                    name="name" required />
                    <span className="register__input-error name-input-error"></span>
                </label>
                <label className="register__field">
                    <p className="register__title">E-mail</p>
                    <input className="register__input register__input_email" type="email" 
                    name="email" required />
                    <span className="register__input-error email-input-error"></span>
                </label>
                <label className="register__field">
                    <p className="register__title">Пароль</p>
                    <input className="register__input register__input_password" type="password" 
                    name="password" required />
                    <span className="register__input-error password-input-error"></span>
                </label>
                <button type="submit" className="register__submit">Зарегистрироваться</button>
            </form>
            <div className="register__container">
                <p className="register__text">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="register__link">Войти</Link>
            </div>
        </div>
    )
}

export default Register;