import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList() {
    return(
        <section className="cardlist">
            <ul className="cards">
                <li className="cards__element"><MoviesCard /></li>
                <li className="cards__element"><MoviesCard /></li>
                <li className="cards__element"><MoviesCard /></li>
                <li className="cards__element"><MoviesCard /></li>
                <li className="cards__element"><MoviesCard /></li>
                <li className="cards__element"><MoviesCard /></li>
            </ul>
            <button className="cardlist__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;