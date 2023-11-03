import "./Portfolio.css"

function Portfolio() {
    return(
        <section className="portfolio">
            <h1 className="portfolio__header">Портфолио</h1>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://gina-frigman.github.io/how-to-learn/" rel="noreferrer" target="_blank">Статичный сайт
                    <p className="portfolio__link-icon">↗</p></a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://gina-frigman.github.io/russian-travel/" rel="noreferrer" target="_blank">Адаптивный сайт
                    <p className="portfolio__link-icon">↗</p></a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://mesto.gina.nomoredomainsicu.ru/" rel="noreferrer" target="_blank">Одностраничное приложение
                    <p className="portfolio__link-icon">↗</p></a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;