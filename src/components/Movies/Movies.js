import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}

export default Movies;