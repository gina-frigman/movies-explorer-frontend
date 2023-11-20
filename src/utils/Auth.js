class Auth {
    constructor(props) {
        this._baseUrl = props.baseUrl;
        this._headers = props.headers;
    }

    _checkResponeData(res) {
        if (!res.ok) {
            return Promise.reject(`ошибка ${res.status}`);
        }
        return res.json();
    }

    register(data) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                "email": data.email,
                "password": data.password,
                "name": data.name
            })
        })
        .then(this._checkResponeData)
    }

    authorize(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                "email": data.email,
                "password": data.password
            })
        })
        .then(this._checkResponeData)
        .then((data) => {
            if (data.token) {
                localStorage.setItem("jwt", data.token);
                return data;
            }
        });
    }

    getContent(token) {
        return fetch(`${this._baseUrl}/users/me`,{
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._checkResponeData);
    }
}

export const auth = new Auth({
    baseUrl: "http://localhost:3000",
    headers: {
        "Content-type": "application/json"
    }
});