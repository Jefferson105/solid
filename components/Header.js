import { connect } from "react-redux";
import NavMenu from "./NavMenu";

const Header = () =>
    <header className="header">
        <NavMenu />
        <div className="header__info">
            <h2 className="header__h2">Transforme a Gestão da sua<br/> empresa e acelere seu crescimento com a SOLID</h2>
           
            <button className="header__button">Fale com nossos consultores</button>
            <button className="header__arrow-down"><img src="/static/img/expand-button.svg" /></button>
        </div>
        
    </header>

export default connect(state => state)(Header);

/*<div className="header__backgroundfundo"></div>
<figure>
            <img className="header__background" src="/static/img/office-3295556_1920.jpg"/>
        </figure>
*/