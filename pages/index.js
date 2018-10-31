import Link from 'next/link';
import { connect } from "react-redux";

const Home = () =>
    <section className="container">
        <header  className="header">
        <nav className="header__nav">
            <ul  className="header__list">
                <li className="header__item"><img className="header__logo"src="/static/img/logo_solid_white.svg"/></li>
                <li className="header__item">Sobre a Solid</li>
                <li className="header__item">Nossos Serviços</li>
                <li className="header__item">Clientes</li>
                <li className="header__item">Contato</li>
                <li className="header__item">Blog</li>
                <li className="header__item cel"><img className="header__tel" src="/static/img/tel.svg"/>4330-2784</li>
            </ul> 
            </nav>
            <div className="header__backgroundfundo"></div>
            <img className="header__background" src="/static/img/office-3295556_1920.jpg"/>
        </header>
        <div className="div">
            <h2 className="div__h2">Transforme a Gestão da sua<br/> empresa e acelere seu crescimento com a SOLID</h2>
           
            <button className="div__button">Fale com nossos consultores</button>
        </div>
    </section>

export default connect(state => state)(Home);