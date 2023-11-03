import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;