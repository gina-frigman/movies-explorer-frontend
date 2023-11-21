import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css"
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; 
import { DATA_NOT_CHANGED_ERR, EMAIL_REGEX } from "../../utils/constants";

function Profile(props) {
    const [isFormEditable, setIsFormEditable] = React.useState(false)
    const currentUser = React.useContext(CurrentUserContext);
    const [errors, setErrors] = React.useState({
        name: "",
        email: ""
    });
    const [isSaved, setIsSaved] = React.useState(false)
    const [isValid, setIsValid] = React.useState(false);
    const navigate = useNavigate();
    const [formValue, setFormValue] = React.useState({
        email: '',
        name: ''
    })
    const [submitError, setSubmitError] = React.useState("")
    const noErrors = errors.name === "" && errors.email === "" ? true : false
    const isSubmittable = noErrors && submitError === "" ? true : false

    React.useEffect(() => {
        setFormValue({
            email: currentUser.email,
            name: currentUser.name
        })
        // not working
        setIsSaved(localStorage.getItem('dataChanged') === 'false' ? false : true)
    }, [currentUser, props.isLoggedIn])

    React.useEffect(() => {
        localStorage.setItem('dataChanged', 'false')
        console.log(localStorage)
    }, [navigate, props.isLoggedIn])

    React.useEffect(() => {        
        if (props.isSuccess) {
            localStorage.setItem('dataChanged', 'true')            
        } else {
            localStorage.setItem('dataChanged', 'false')  
        }
    }, [handleSubmit])

    React.useEffect(() => {
        if (formValue.email === currentUser.email && formValue.name === currentUser.name) {
            setSubmitError(DATA_NOT_CHANGED_ERR)
        } else {
            setSubmitError("")
        }
    }, [setIsFormEditable, handleChange])

    function handleChange(evt) {
        const {name, value} = evt.target
        setFormValue({
            ...formValue,
            [name]: value
        })
        setErrors({...errors, [name]: evt.target.validationMessage });
        setIsValid(evt.target.closest("form").checkValidity());
        console.log(evt.target.validationMessage)
    }

    const handleEditProfileClick = () => {
        localStorage.setItem('dataChanged', 'false')
        setIsSaved(false)
        setIsFormEditable(true)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(formValue)
        setIsFormEditable(false)
    }

    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="profile">
                <p className="profile__input-error">{props.errMessage}</p>
                <p className={`profile__data-saved-text ${isSaved ? "profile__data-saved-text_visible" : ""}`}>Данные успешно изменены.</p>
                <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
                <form className="profile__form">
                    <label className="profile__field">
                        <span className="profile__container">
                            <span className="profile__placeholder">Имя</span>
                            {isFormEditable ?
                            <input className="profile__input profile__input_name" value={formValue.name}
                            name="name" placeholder="Имя" required minLength="2" maxLength="30" onChange={handleChange} /> :
                            <span className="profile__input-value">{currentUser.name}</span>
                            }
                        </span>
                        <span className="profile__input-error name-input-error">{errors.name}</span>
                    </label>
                    <label className="profile__field">
                        <span className="profile__container profile__container_borderless">
                            <span className="profile__placeholder">E-mail</span>
                            {isFormEditable ?
                            <input className="profile__input profile__input_email" value={formValue.email}
                            type="email" name="email" placeholder="Почта" onChange={handleChange} pattern={EMAIL_REGEX} /> :
                            <span className="profile__input-value">{currentUser.email}</span>
                            }
                        </span>
                        <span className="profile__input-error email-input-error">{errors.email}</span>
                    </label>
                    {isFormEditable ?
                    <>
                        <span className="profile__input-error">{submitError}</span>
                        <button className={`profile__submit ${isSubmittable ? "" : "profile__submit_disabled"}`} type="submit" 
                        onClick={handleSubmit} disabled={!isSubmittable}>Сохранить</button>
                    </> :                    
                    <button className="profile__edit" onClick={handleEditProfileClick}>Редактировать</button>
                    }
                </form>
                {!isFormEditable && <button className="profile__sign-out-button"><Link className="profile__sign-out" to="/" onClick={props.onSignOut}>Выйти из аккаунта</Link></button>}
            </main>
        </>
    )
}

export default Profile;