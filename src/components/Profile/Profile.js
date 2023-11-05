import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css"
import React from "react";

function Profile(props) {
    const [isFormEditable, setIsFormEditable] = React.useState(false)

    const handleEditProfileClick =() => {
        setIsFormEditable(true)
    }

    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="profile">
                <h1 className="profile__greeting">Привет, Виталий!</h1>
                <form className="profile__form">
                    <label className="profile__field">
                        <span className="profile__container">
                            <span className="profile__placeholder">Имя</span>
                            {isFormEditable ?
                            <input className="profile__input profile__input_name"
                            name="name" placeholder="Имя" required /> :
                            <span className="profile__input-value">Виталий</span>
                            }
                        </span>
                        <span className="profile__input-error name-input-error"></span>
                    </label>
                    <label className="profile__field">
                        <span className="profile__container profile__container_borderless">
                            <span className="profile__placeholder">E-mail</span>
                            {isFormEditable ?
                            <input className="profile__input profile__input_email"
                            type="email" name="email" placeholder="Почта" required /> :
                            <span className="profile__input-value">pochta@yandex.ru</span>
                            }
                        </span>
                        <span className="profile__input-error email-input-error"></span>
                    </label>
                    {isFormEditable ?
                    <>
                        <span className="profile__input-error submit-input-error"></span>
                        <button className="profile__submit" type="submit">Сохранить</button>
                    </> :                    
                    <button className="profile__edit" onClick={handleEditProfileClick}>Редактировать</button>
                    }
                </form>
                {!isFormEditable && <Link className="profile__sign-out" to="/sign-in">Выйти из аккаунта</Link>}
            </main>
        </>
    )
}

export default Profile;