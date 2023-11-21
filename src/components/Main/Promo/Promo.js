import promoLogo from "./../../../images/logo.svg"
import "./Promo.css"

function Promo() {
    return(
        <section className="promo">
            <img className="promo__logo" src={promoLogo} alt="логотип" />
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;