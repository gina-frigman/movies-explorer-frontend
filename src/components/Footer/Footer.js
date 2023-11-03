import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copy">&copy; 2023</p>
                <div className="footer__links">
                    <Link className="footer__link" to="#">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="#">Github</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;