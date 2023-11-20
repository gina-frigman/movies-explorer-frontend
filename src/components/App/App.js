import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css"
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { auth } from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AUTH_ERR, EXISTING_EMAIL_ERR, SERVER_ERR, UPDATE_PROFILE_ERR } from "../../utils/constants";
import Preloader from "../Movies/Preloader/Preloader";

function App() {
    const [cards, setCards] = React.useState(0)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false)
    const [errMessage, setErrMessage] = React.useState("");
    const [currentUser, setCurrentUser] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [allMovies, setAllMovies] = React.useState([]);
    const [allLikedMovies, setAllLikedMovies] = React.useState([]);
    const [likedMovies, setLikedMovies] = React.useState([]);
    const [isMoviesPath, setMoviesPath] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (localStorage.jwt) {
            Promise.all([
                mainApi.getUserInfo(localStorage.jwt),
                moviesApi.getMovies()
            ])
            .then(([userRes, moviesRes]) => {
                setCurrentUser(userRes);
                setAllMovies(moviesRes)
                if (localStorage.movies) {
                    setMovies(JSON.parse(localStorage.movies))
                }
                setErrMessage("")
                setIsLoggedIn(true);
            })
            .catch(err => {
                console.log(err)
                if (err.status === 500) {
                    setErrMessage(SERVER_ERR)
                }
            })
        }
    }, [isLoggedIn])

    React.useEffect(() => {
        setIsLoading(true)
        if (localStorage.getItem("jwt")) {
            const jwt = localStorage.getItem("jwt")
            Promise.all([
                auth.getContent(jwt),
                mainApi.getLikedMovies(localStorage.jwt)
            ])
            .then(([authRes, likedMoviesRes]) => {
                if (authRes) {
                    setIsLoggedIn(true);
                }
                setAllLikedMovies(likedMoviesRes)
                setLikedMovies(likedMoviesRes)
            })
            .catch(err => console.log(err))
        } else {
            setIsLoggedIn(false)
        }
        setIsLoading(false)
        setMoviesPath(window.location.pathname === '/movies' ? true : false)
    }, [navigate])

    React.useEffect(() => {
        changeAmountOfCards();
        window.addEventListener("resize", changeAmountOfCards);
        return () => {
            window.removeEventListener("resize", changeAmountOfCards);
        };
    }, []);

    function handleRegister(formValue) {
        auth.register(formValue)
        .then(res => {
            if (res) {
                setIsLoggedIn(true);
                handleLogin({email: formValue.email, password: formValue.password})
            }
        })
        .catch(err => {
            console.log(err);
            if (err.status === "11000") {
                setErrMessage(EXISTING_EMAIL_ERR)
            } else {
                setErrMessage(AUTH_ERR)
            }
        })
    }

    function handleLogin(formValue) {
        auth.authorize(formValue)
        .then(res => {
            if (res) {
                setIsLoggedIn(true);
                navigate("/movies", {replace: true});
                setErrMessage("")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
  
    function handleSignOut() {
        setIsLoading(true)
        localStorage.clear()
        setAllLikedMovies([])
        setMovies([])
        setCurrentUser({
            email: "",
            name: ""
        })
        setIsLoggedIn(false)
        setIsLoading(false)
    }

    function handleEditUserInfo(data) {
        setIsLoading(true)
        mainApi.editUserInfo(data, localStorage.jwt)
        .then(res => {
            if (res) {
                setCurrentUser({
                    email: res.email,
                    name: res.name
                })
                setIsSuccess(true)
                setErrMessage("")
                setIsLoading(false)
            }
        })
        .catch(err => {
            if (err === "ошибка 409") {
                navigate("/profile", {replace: true})
                setIsLoading(false)
                setIsSuccess(false)
                setErrMessage(EXISTING_EMAIL_ERR)
            } else {
                setErrMessage(UPDATE_PROFILE_ERR)
            }
        })
    }

    function filterMovies(movies, formValue, filter) {
        const searchedMovies = formValue === "" ? allLikedMovies : movies.filter(movie => 
            (movie.nameRU.toLowerCase().includes(formValue.toLowerCase())) || 
            (movie.nameEN.toLowerCase().includes(formValue.toLowerCase()))
        )
        if (filter) {
            const shortMovies = searchedMovies.filter(movie => movie.duration <= 40)
            if (isMoviesPath) {
                setMovies(shortMovies)
                localStorage.setItem("movies", JSON.stringify(shortMovies))
            } else {
                setLikedMovies(shortMovies)
            }
        } else {
            if (isMoviesPath) {
                setMovies(searchedMovies)
                localStorage.setItem("movies", JSON.stringify(searchedMovies))
            } else {
                setLikedMovies(searchedMovies)
            }
        }
        setIsLoading(false)
    }

    function handleSearchMovies(formValue, filter) {
        changeAmountOfCards();
        setIsLoading(true)
        if (isMoviesPath) {
            filterMovies(allMovies, formValue, filter) 
        } else {
            filterMovies(allLikedMovies, formValue, filter)
        }
        setErrMessage("")
    }

    function handleDeleteSavedMovie(movie) {
        mainApi.deleteMovie(movie._id, localStorage.jwt)
        .then(() => {
            setAllLikedMovies(allLikedMovies.filter(likedMovie => likedMovie._id !== movie._id))
            setLikedMovies(likedMovies.filter(likedMovie => likedMovie._id !== movie._id))
        })
        .catch(err => console.log(err))
    }

    function handleLikeMovie(movie, isLiked) {
        if (!isLiked) {
            mainApi.saveMovie(movie, localStorage.jwt)
            .then((likedMovie) => {
                setAllLikedMovies([likedMovie, ...allLikedMovies])
            })
            .catch(err => console.log(err))
        } else {
            handleDeleteSavedMovie(allLikedMovies.find(likedMovie => movie.id === likedMovie.movieId))
        }
    }

    function changeAmountOfCards() {
        setCards(window.innerWidth > 1139 ? 12 : window.innerWidth > 766 ? 8 : 5)
    };
      
    function handleMoreClick() {
        if (window.innerWidth > 1023) {
            setCards(cards + 3);
        } else {
            setCards(cards + 2);
        }
    }

    return(
        <div className="app">
            <CurrentUserContext.Provider value={currentUser}>
                {isLoading ? <Preloader /> :
                <Routes>
                    <Route path="*" element={<Error />}  />
                    <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
                    <Route path="/signup" element={<Register onSubmit={handleRegister} errMessage={errMessage} />} />
                    <Route path="/signin" element={<Login onSubmit={handleLogin} errMessage={errMessage} />} />
                    <Route path="/movies" element={<ProtectedRoute element={Movies} cards={cards} isLoggedIn={isLoggedIn} onLike={handleLikeMovie} 
                    onMoreClick={handleMoreClick} onSearch={handleSearchMovies} movies={movies} errMessage={errMessage} isLoading={isLoading} 
                    likedMovies={likedMovies} />} />
                    <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} onDelete={handleDeleteSavedMovie} 
                    onMoreClick={handleMoreClick} onSearch={handleSearchMovies} errMessage={errMessage} isLoading={isLoading} cards={cards} 
                    likedMovies={allLikedMovies} movies={likedMovies} />} />
                    <Route path="/profile" element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} onSubmit={handleEditUserInfo} 
                    onSignOut={handleSignOut} errMessage={errMessage} isLoading={isLoading} isSuccess={isSuccess} />} />
                </Routes>
                }
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App;