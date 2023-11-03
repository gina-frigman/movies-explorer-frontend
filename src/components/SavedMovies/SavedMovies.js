import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}

export default SavedMovies;