import "./AboutMe.css"
import photo from "./../../../images/photo.png"

function AboutMe() {
    return(
        <section className="me" id="student">
            <h1 className="me__header">Студент</h1>
            <div className="me__container">
                <div className="me__info">
                    <h3 className="me__name">Виталий</h3>
                    <p className="me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="me__link" href="https://github.com/gina-frigman" rel="noreferrer" target="_blank">Github</a>
                </div>
                <img className="me__photo" src={photo} alt="фото студента" />
            </div>
        </section>
    )
}

export default AboutMe;