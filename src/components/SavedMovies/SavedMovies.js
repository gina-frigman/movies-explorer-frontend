import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSubmit={props.onSearch} errMessage={props.errMessage} />
                <MoviesCardList moviespath={false} isLoading={props.isLoading} onDelete={props.onDelete} likedMovies={props.movies} movies={props.movies} onLike="" />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;