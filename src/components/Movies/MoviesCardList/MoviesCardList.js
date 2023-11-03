import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList() {
    return(
        <div className="cardlist">
            <div className="cards">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className="cardlist__more">Ещё</button>
        </div>
    )
}

export default MoviesCardList;