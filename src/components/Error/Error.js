import { useNavigate } from "react-router-dom";
import "./Error.css"

function Error() {
    const navigate = useNavigate()

    return(
        <section className="error">
            <h1 className="error__status">404</h1>
            <p className="error__message">Страница не найдена</p>
            <button className="error__return-button" onClick={() => {navigate(-1)}}>Назад</button>
        </section>
    )
}

export default Error;