import { connect } from "react-redux";

const NavMenu = () =>
    <nav className="nav-menu">
        <ul className="nav-menu__list">
            <li className="nav-menu__item nav-menu__item--logo"><img className="nav-menu__logo"src="/static/img/logo_solid_white.svg"/></li>
            <li className="nav-menu__item nav-menu__item--item">Sobre a Solid</li>
            <li className="nav-menu__item nav-menu__item--item">Nossos Serviços</li>
            <li className="nav-menu__item nav-menu__item--item">Clientes</li>
            <li className="nav-menu__item nav-menu__item--item">Contato</li>
            <li className="nav-menu__item nav-menu__item--item">Blog</li>
            <li className="nav-menu__item nav-menu__item--cel"><img className="nav-menu__tel" src="/static/img/tel.svg"/>4330-2784</li>
        </ul> 
    </nav>

export default connect(state => state)(NavMenu);