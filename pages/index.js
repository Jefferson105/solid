import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import Impacto from "../components/Impacto";
import Equipe from "../components/Equipe";
import Clientes from "../components/Clientes";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artigo: 2,
            sec: 0
        }
    }

    render() {
        const { artigo, sec } = this.state;
        return(
            <section ref={el => this.container = el} className="container container__home">
                <header ref={el => this.header = el} className="header">
                    <NavMenu />
                    <div className="header__info">
                        <h2 className="header__h2">Transforme a Gestão da sua<br/> empresa e acelere seu crescimento com a SOLID</h2>
                    
                        <button className="header__button">Fale com nossos consultores</button>
                        <button onClick={() => {
                            window.scrollTo({
                                behavior: "smooth",
                                left: 0,
                                top: 700
                            });
                        }} className="header__arrow-down"><img src="/static/img/expand-button.svg" /></button>
                    </div>
                    
                </header>
                <Impacto />
                <Clientes />
                <section ref={el => this.blog = el} className="blog">
                    <h3 className="impacto__title">Artigos do <b> Blog SOLID</b></h3>
                    <ul className="blog__postblog">
                        <li onMouseEnter={() => this.setState({ artigo: 0 })} className={`blog__artigo ${artigo == 0 && "blog__artigo--selected"}`}>
                            <img className="blog__foto" src="/static/img/img_solid5.jpg"/>    
                            <div className="blog__text">
                                <p className="blog__title"><b>O titulo do artigo do blog deve conter até 3 linhas</b></p>
                                <p className="blog__date"><img className="blog__calendar" src="/static/img/calendar.svg"/> 23 de setembro 2018</p>
                                <p className="blog__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                            </div>
                        </li>
                        <li onMouseEnter={() => this.setState({ artigo: 1 })} className={`blog__artigo ${artigo == 1 && "blog__artigo--selected"}`}>
                            <img className="blog__foto" src="/static/img/img_solid7.jpg"/>    
                            <div className="blog__text">
                                <p className="blog__title"><b>O titulo do artigo do blog deve conter até 3 linhas</b></p>
                                <p className="blog__date"><img className="blog__calendar" src="/static/img/calendar.svg"/> 23 de setembro 2018</p>
                                <p className="blog__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                            </div>
                        </li>
                        <li onMouseEnter={() => this.setState({ artigo: 2 })} className={`blog__artigo ${artigo == 2 && "blog__artigo--selected"}`}>
                            <img className="blog__foto" src="/static/img/img_solid4.jpg"/>
                            <div className="blog__text">
                                <p className="blog__title"><b>O titulo do artigo do blog deve conter até 3 linhas</b></p>
                                <p className="blog__date"><img className="blog__calendar" src="/static/img/calendar.svg"/> 23 de setembro 2018</p>
                                <p className="blog__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                            </div>
                        </li>
                    </ul>
                    <button className="header__button blog__button">Conheça nosso blog</button>
                </section> 
                <section ref={el => this.conheca = el} className="conheca">
                    <div className="conheca__info">
                        <h3 className="conheca__h3">Conheça mais conteúdos para transformar o seu negócio</h3>
                        <button className="conheca__button">Descubra</button>
                    </div>
                    <figure className="conheca__figure">
                        <img className="conheca__img" src="/static/img/livro.png"/> 
                    </figure>
                </section>
                <Equipe />
            </section>
        )
    }
} 

export default connect(state => state)(Home);