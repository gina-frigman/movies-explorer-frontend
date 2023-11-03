import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main(props) {
    return(
        <>
            <Header color="blue" isLoggedIn={props.isLoggedIn} />
            <main className="main">
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;