import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSubmit={props.onSearch} errMessage={props.errMessage} moviespath={true} />
                <MoviesCardList moviespath={true} isLoading={props.isLoading} onLike={props.onLike} movies={props.movies} likedMovies={props.likedMovies} onDelete='' />
            </main>
            <Footer />
        </>
    )
}

export default Movies;