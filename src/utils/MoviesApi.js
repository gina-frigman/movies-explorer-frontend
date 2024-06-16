class MoviesApi {
    constructor(props) {
        this._baseUrl = props.baseUrl;
    }

    _checkResponeData(res) {
        if (!res.ok) {
            return Promise.reject(`ошибка ${res.status}`);
        }
        return res.json();
    }

    getMovies() {
        return fetch(this._baseUrl, {
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(this._checkResponeData)
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies"
})