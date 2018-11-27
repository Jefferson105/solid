import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import Impacto from "../components/Impacto";

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
                <section ref={el => this.clientes = el} className="clientes">
                    <h3 className="impacto__title">Alguns de nossos <b>clientes satisfeitos</b></h3>
                    <div className="clientes__conteudo">
                        <button className="clientes__arrows clientes__arrows--left"><img src="/static/img/left-arrow.svg" /></button>
                        <button className="clientes__arrows clientes__arrows--right"><img src="/static/img/right-arrow.svg" /></button>
                        <div>
                            <figure className="clientes__figure">
                                <img className="clientes__user" src="/static/img/abc-perfil.jpg"/>
                            </figure>
                        </div>
                        <div className="clientes__avaliacao">
                            <p className="clientes__p">"A Solid foi crucial para nosso crescimento na era da Logística 4.0. A empresa nos tirou do ciclo da "sobrevivência" nos levando para o ciclo de prosperidade. Conseguimos reduzir custos significativos e, mesmo assim, aumentar a nossa lucratividade"</p>
                            <p className="clientes__b"><b>Danilo Guedes</b></p>
                            <p>CEO da ABC Cargas</p>
                            
                            <img className="clientes__empresa" src="/static/img/abclogo.jpg"/>
                            <button className="header__button cases">Conheça nossos cases</button>
                        </div>
                    </div>
                    <img className="clientes__bg" src="/static/img/img_solid6.png" />
                </section>
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
                        <h3 className="conheca__h3">conheca mais conteúdos para transformar o seu negócio</h3>
                        <button className="conheca__button">Descubra</button>
                    </div>
                    <figure className="conheca__figure">
                        <img className="conheca__img" src="/static/img/livro.png"/> 
                    </figure>
                </section>
                <section ref={el => this.equipe = el} className="equipe">
                    <h3 className="impacto__title">Nossa<b> Equipe</b></h3>
                    <ul className="equipe__list">
                        <li className="equipe__item">
                            <figure className="equipe__perfil">
                                <img  className="equipe__img" src="/static/img/img_solid2.jpg"/>   
                            </figure>
                            <div className="equipe__info">
                                <b>Patrícia Bogalheira</b>
                                <p className="equipe__cargo">Diretora de Treinamento</p>
                                <p className="equipe__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                                </div>
                        </li>
                        <li className="equipe__item">
                            <figure className="equipe__perfil">
                                <img  className="equipe__img" src="/static/img/img_solid3.jpg"/>   
                            </figure>
                            <div className="equipe__info">
                                <b>Patrícia Bogalheira</b>
                                <p className="equipe__cargo">Diretora de Treinamento</p>
                                <p className="equipe__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                            </div>
                        </li>
                        <li className="equipe__item">
                            <figure className="equipe__perfil">
                                <img  className="equipe__img" src="/static/img/img_solid2.jpg"/>   
                            </figure>
                            <div className="equipe__info">
                                <b>Patrícia Bogalheira</b>
                                <p className="equipe__cargo">Diretora de Treinamento</p>  
                                <p className="equipe__post">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.</p>
                            </div>
                        </li>
                    </ul>
                    <button className="header__button blog__button">Saiba mais</button>
                </section>
                <footer ref={el => this.footer = el} className="footer">
                    <div className="footer__content">
                        <div>
                            <figure>
                                <img className="footer__logo" src="/static/img/logo_solid_blue.svg" />
                            </figure>
                            <p className="footer__txt footer__txt--top">R. Jurubatuba, 1350</p>
                            <p className="footer__txt">Salas 618,619 - Centro</p>
                            <p className="footer__txt">CEP 09725-000</p>
                            <p className="footer__txt footer__txt--top">São Bernardo do Campo - SP</p>
                            <p className="footer__txt footer__txt--top">Telefone: (11) 4330-2784</p>
                            <p className="footer__socials">
                                <a className="footer__social"><img src="/static/img/facebook-logo.svg" /></a>
                                <a className="footer__social"><img src="/static/img/twitter-logo.svg" /></a>
                                <a className="footer__social"><img src="/static/img/linkedin-logo.svg" /></a>
                            </p>
                        </div>
                        <div className="footer__list-content">
                            <ul className="footer__list">
                                <li className="footer__item">Nossoa Serviços</li>
                                <li className="footer__item">Sobre a Solid</li>
                                <li className="footer__item">Clientes</li>
                                <li className="footer__item">Contato</li>
                                <li className="footer__item">Blog</li>
                            </ul>
                        </div>
                        <div>
                            <div className="footer__box">
                                <h4 className="footer__title">Receba dicas para transformar seu negócio</h4>
                                <input className="footer__input footer__input--marg" placeholder="Seu e-mail" />
                                <input className="footer__input" placeholder="Seu nome" />
                                <button className="header__button footer__button">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                    <p className="footer__p">Solid Gestão Empresarial &copy; - Todos os direitos reservados</p>
                </footer>
            </section>
        )
    }
} 

export default connect(state => state)(Home);

