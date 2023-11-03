import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css"
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    return(
        <div className="app">
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />}  />
                <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
                <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} />} />
                <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;