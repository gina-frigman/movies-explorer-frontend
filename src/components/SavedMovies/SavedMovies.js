import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSubmit={props.onSearch} errMessage={props.errMessage} moviespath={false} />
                <MoviesCardList moviespath={false} isLoading={props.isLoading} onDelete={props.onDelete} 
                likedMovies={props.likedMovies} movies={props.movies} onLike="" onMore={props.onMoreClick} cards={props.cards} />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;