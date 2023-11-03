import "./AboutProject.css"

function AboutProject() {
    return(
        <section className="project">
            <h2 className="project__header" id="about-project">О проекте</h2>
            <div className="project__container">
                <div className="project__column">
                    <h3 className="project__column-header">Дипломный проект включал 5 этапов</h3>
                    <p className="project__column-text">Составление плана, работу над бэкендом, 
                    вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__column">
                    <h3 className="project__column-header">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__column-text">У каждого этапа был мягкий и жёсткий дедлайн, 
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__chart">
                <p className="project__chart-backend">1 неделя</p>
                <p className="project__chart-frontend">4 недели</p>
                <p className="project__text">Back-end</p>
                <p className="project__text">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;