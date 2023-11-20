import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css"

function MoviesCardList(props) {
    const pathname = window.location.pathname;
    const movies = props.movies.length !== 0 ? true : false
    const firstTime = (props.moviespath && !localStorage.search) || (!props.moviespath && JSON.stringify(props.likedMovies) === '[]')

    function handleClick() {
        props.onMore()
    }

    return(
        <section className={`cardlist ${movies ? "" : "cardlist__not-found"}`}>
            <ul className="cards">
                {props.isLoading && localStorage.search ? <Preloader /> : movies && 
                Array.from(props.movies).slice(0, props.moviespath ? props.cards : props.movies.length).map(movie => (
                    <li key={props.moviespath ? movie.id : movie._id} className="cards__element"><MoviesCard movie={movie} onLike={props.onLike} 
                    onDelete={props.onDelete} likedMovies={props.likedMovies} moviespath={props.moviespath} /></li>
                ))}
                {!firstTime && !movies && !props.isLoading && <p className="cards__not-found">Ничего не найдено.</p>}
            </ul>
            {movies && pathname === "/movies" && props.cards < props.movies.length && <button className="cardlist__more" onClick={handleClick}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;