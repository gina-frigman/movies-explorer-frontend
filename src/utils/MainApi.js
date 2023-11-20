class MainApi {
    constructor(props) {
        this._baseUrl = props.baseUrl;
    }

    _checkResponeData(res) {
        if (!res.ok) {
            return Promise.reject(`ошибка ${res.status}`);
        }
        return res.json();
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._checkResponeData);
    }

    editUserInfo(data, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": data.email,
                "name": data.name
            })
        })
        .then(this._checkResponeData);
    }

    getLikedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._checkResponeData)
    }

    saveMovie(data, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
                owner: data.owner,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                movieId: data.id,
            })
        })
        .then(this._checkResponeData)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(this._checkResponeData);
    }
}

export const mainApi = new MainApi({    
    baseUrl: "https://api.movies.gina.nomoredomainsrocks.ru"
})