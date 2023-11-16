import "./Register.css"
import logo from "./../../images/logo_header.svg"
import { Link } from "react-router-dom";
import React from "react";

function Register(props) {
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: "",
        name: ""
    })
    const noErrors = errors.name === "" && errors.email === "" && errors.password === "" ? true : false

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
        props.onSubmit(formValue)
    }

    return(
        <section className="register">
        <Link to="/"><img className="register__logo" src={logo} alt="логотип" /></Link>
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form">
                <label className="register__field">
                    Имя
                    <input className="register__input register__input_name" value={formValue.name} onChange={handleChange}
                    name="name" placeholder="Имя" required minLength="2" maxLength="30" />
                    <span className="register__input-error name-input-error">{errors.name}</span>
                </label>
                <label className="register__field">
                    E-mail
                    <input className="register__input register__input_email" type="email" 
                    name="email" placeholder="Почта" required value={formValue.email} onChange={handleChange} />
                    <span className="register__input-error email-input-error">{errors.email}</span>
                </label>
                <label className="register__field">
                    Пароль
                    <input className="register__input register__input_password" type="password" value={formValue.password} 
                    name="password" placeholder="Пароль" minLength="2" maxLength="30" onChange={handleChange} required />
                    <span className="register__input-error password-input-error">{errors.password}</span>
                </label>
                <span className="register__input-error submit-error">{props.errMessage}</span> 
                <button type="submit" className={`register__submit ${!noErrors ? "register__submit_disabled" : ""}`} 
                onClick={handleSubmit} disabled={noErrors ? false : true}>Зарегистрироваться</button>
            </form>
            <div className="register__container">
                <p className="register__text">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__link">Войти</Link>
            </div>
        </section>
    )
}

export default Register;