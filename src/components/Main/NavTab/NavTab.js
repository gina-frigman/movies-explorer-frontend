import "./NavTab.css"

function NavTab() {
    return(
        <section className="navtab">
            <nav className="navtab__links">
                <a className="navtab__link" href="#about-project">О проекте</a>
                <a className="navtab__link" href="#techs">Технологии</a>
                <a className="navtab__link" href="#student">Студент</a>
            </nav>
        </section>
    )
}

export default NavTab;