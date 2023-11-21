import "./Login.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";
import React from "react";
import { EMAIL_REGEX } from "../../utils/constants";

function Login(props) {
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: ""
    })
    const noErrors = errors.email === "" && errors.password === "" ? true : false

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
        setErrors({...errors, [name]: evt.target.validationMessage });
        setIsValid(evt.target.closest("form").checkValidity());
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(formValue);
    }
    return(
        <section className="login">
            <Link to="/"><img className="login__logo" src={logo} alt="логотип" /></Link>
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form">
                <label className="login__field">
                    E-mail
                    <input className="login__input login__input_email" type="email" onChange={handleChange}
                    name="email" placeholder="Почта" value={formValue.email} required pattern={EMAIL_REGEX} />
                    <span className="login__input-error email-input-error">{errors.email}</span>
                </label>
                <label className="login__field">
                    Пароль
                    <input className="login__input login__input_password" type="password" onChange={handleChange}
                    name="password" placeholder="Пароль" minLength="2" maxLength="30" value={formValue.password} required />
                    <span className="login__input-error password-input-error">{errors.password}</span>
                </label>
                <button type="submit" className={`login__submit ${!noErrors ? "login__submit_disabled" : ""}`} 
                onClick={handleSubmit} disabled={noErrors ? false : true}>Войти</button>
            </form>
            <div className="login__container">
                <p className="login__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="login__link">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;