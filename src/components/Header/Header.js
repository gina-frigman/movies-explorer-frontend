import "./Header.css"
import headerLogo from "./../../images/logo_header.svg"
import profileIcon from "./../../images/profile.svg"
import { Link } from "react-router-dom"
import React from "react";
import Navigation from "../Navigation/Navigation";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    function openMenu() {
        setIsMenuOpen(true)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }
    
    const returnDesktopHeader = () => {
        return(
            <header className={`header ${props.color ? "header_blue" : ""}`}>
                {props.isLoggedIn ?
                    <>
                        <div className="header__flexbox">
                            <Link to="/"><img className="header__logo" src={headerLogo} alt="логотип" /></Link>
                            <div className="header__container header__container_movies">
                                <Link className="header__button" to="/movies">Фильмы</Link>
                                <Link className="header__button" to="/saved-movies">Сохранённые фильмы</Link>
                            </div>
                        </div>
                            <div className="header__container header__container_profile">
                                <Link className="header__button" to="/profile">Аккаунт</Link>
                                <img className={`header__profile-icon ${props.color && "header__profile-icon_blue"}`} 
                                src={profileIcon} alt="иконка профиля" />
                            </div>
                    </> :
                    <>
                        <Link to="/"><img className="header__logo" src={headerLogo} alt="логотип" /></Link>
                        <div className="header__container header__container_auth">
                            <Link className="header__button" to="/sign-up">Регистрация</Link>
                            <Link className="header__button header__button_sign-in" to="/sign-in">Войти</Link>
                        </div>
                    </>
                }
            </header>
        )
    }

    const returnMobileHeader = () => {
        return(
            <header className={`header ${props.color ? "header_blue" : ""}`}>
                <img className="header__logo" src={headerLogo} alt="логотип" />
                {props.isLoggedIn ?
                    isMenuOpen ?
                        <Navigation onClose={closeMenu} /> :
                        <button className="header__menu" onClick={openMenu}></button> :
                    <div className="header__container header__container_auth">
                        <Link className="header__button" to="/sign-up">Регистрация</Link>
                        <Link className="header__button header__button_sign-in" to="/sign-in">Войти</Link>
                    </div>
                }                
            </header>
        )
    }

    React.useEffect(() => {
        function handleResizeWindow() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width > breakpoint) {
        return returnDesktopHeader()
    } else {
        return returnMobileHeader()
    }
}

export default Header;