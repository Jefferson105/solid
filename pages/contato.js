import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                <header className="sobre__header">
                    <h2 className="sobre__title">Receba o contato de um consultor especializado ainda hoje!</h2>      
            </header>
                <div className="contato__form">
                    <input type="name" className="contato__input" placeholder="Seu nome"/>
                    <input type="name" className="contato__input" placeholder="Seu nome"/>
                    <input type="name" className="contato__input" placeholder="Seu nome"/>
                    <input type="name" className="contato__input" placeholder="Seu nome"/>
                    <input type="name" className="contato__input" placeholder="Seu nome"/>
                    <button className="header__button blog__button">Enviar</button>
                </div>
             </section>       
      
      )
    }
}                
 
export default connect(state => state)(Home);
        