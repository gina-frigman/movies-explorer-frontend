import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css"

function MoviesCardList(props) {
    const [cards, setCards] = React.useState(0)
    const pathname = window.location.pathname;
    const movies = props.movies.length !== 0 ? true : false
    const firstTime = (props.moviespath && !localStorage.search) || (!props.moviespath && JSON.stringify(props.likedMovies) === '[]')

    React.useEffect(() => {
        amountOfCards();
        window.addEventListener("resize", amountOfCards);
        return () => {
            window.removeEventListener("resize", amountOfCards);
        };
    }, []);

    const amountOfCards = () => {
        setCards(window.innerWidth > 1279 ? 9 : window.innerWidth > 767 ? 8 : 5)
    };
      
    const handleMoreClick = () => {
        if (window.innerWidth > 1023) {
            setCards(cards + 3);
        } else {
            setCards(cards + 2);
        }
    }
    return(
        <section className={`cardlist ${movies ? "" : "cardlist__not-found"}`}>
            <ul className="cards">
                {props.isLoading && localStorage.search ? <Preloader /> : movies && 
                Array.from(props.movies).slice(0, props.moviespath ? cards : props.movies.length).map(movie => (
                    <li key={props.moviespath ? movie.id : movie._id} className="cards__element"><MoviesCard movie={movie} onLike={props.onLike} 
                    onDelete={props.onDelete} likedMovies={props.likedMovies} moviespath={props.moviespath} /></li>
                ))}
                {!firstTime && !movies && !props.isLoading && <p className="cards__not-found">Ничего не найдено.</p>}
            </ul>
            {movies && pathname === "/movies" && cards < props.movies.length && <button className="cardlist__more" onClick={handleMoreClick}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;