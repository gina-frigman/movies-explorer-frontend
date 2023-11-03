import "./MoviesCard.css"
import cardExample from "./../../../images/card_example.png"

function MoviesCard() {
    return(
        <div className="card">
            <img className="card__image" alt="изображение фильма" src={cardExample} />
            <div className="card__container">
                <h1 className="card__title">33 слова о дизайне</h1>
                <button className={`card__button ${window.location.pathname === "/movies" ? "card__button_like" : "card__button_delete"}`}></button>
            </div>
            <p className="card__duration">1ч 47м</p>
        </div>
    )
}

export default MoviesCard;