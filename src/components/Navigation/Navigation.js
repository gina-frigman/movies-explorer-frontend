import { Link, NavLink } from "react-router-dom";
import profileIcon from "./../../images/profile.svg"
import "./Navigation.css"

function Navigation(props) {
    return(
        <nav className='menu'>
            <div className="menu__container">
                <div className="menu__flexbox">
                    <button className="menu__close-button" onClick={props.onClose}></button>
                    <div className="menu__links">
                        <NavLink className={`menu__link ${window.location.pathname === "/" ? "menu__link_active" : ""}`} 
                        to="/main" replace={true}>Главная</NavLink>
                        <NavLink className={`menu__link ${window.location.pathname === "/movies" ? "menu__link_active" : ""}`}  
                        to="/movies" replace={true}>Фильмы</NavLink>
                        <NavLink className={`menu__link ${window.location.pathname === "/saved-movies" ? "menu__link_active" : ""}`}  
                        to="/saved-movies" replace={true}>Сохранённые фильмы</NavLink> 
                    </div>
               </div>
                <div className="menu__profile">
                    <Link className="menu__profile-button" to="/profile" replace={true}>Аккаунт</Link>
                    <img className="menu__icon" src={profileIcon} alt="иконка профиля" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;