import { Link } from "react-router-dom"
import "./MoviesCard.css"
import React from "react"

function MoviesCard(props) {
    const fullUrl = props.movie.image.toString().includes('https://api.nomoreparties.co/') ? true : false
    const hours = Math.floor(props.movie.duration / 60)
    const minutes = props.movie.duration - 60*hours
    const [isLiked, setIsLiked] = React.useState(false)

    React.useEffect(() => {
        const liked = props.likedMovies.some(movie => movie._id === props.movie.id)
        setIsLiked(liked)
    }, [setIsLiked])

    function handleLike() {
        props.onLike(props.movie, isLiked)
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        } 
    }

    function handleDelete() {
        props.onDelete(props.movie)
        setIsLiked(false)
    }

    return(
        <div className="card">
            <Link to={props.movie.trailerLink} target="_blank"><img className="card__image" alt="изображение фильма" src={!fullUrl ? 
            `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image} /></Link>
            <div className="card__container">
                <h2 className="card__title">{props.movie.nameRU}</h2>
                <button className={`card__button ${props.moviespath ? `card__button-like ${isLiked ? "card__button-like_active" : ""}` : "card__button-delete"}`}
                onClick={props.moviespath ? handleLike : handleDelete}></button>
            </div>
            <p className="card__duration">{`${hours}ч ${minutes}м`}</p>
        </div>
    )
}

export default MoviesCard;