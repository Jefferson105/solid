import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container container__sobre">
                <NavMenu isFixed={true} />
                <header className="sobre__header">
                    <h2 className="sobre__title">Mais do que uma consultoria de gestão, somos uma empresa que nasceu para transformar seu negócio e acelerar os resultados.</h2>      
                    <button className="header__arrow-down"><img src="/static/img/expand-button.svg" /></button>
                </header>
                <section className="sobre__market">
                    <h3 className="sobre__h3">Estamos no mercado há 15 anos e, desde então, já ajudamos mais de XX empresas a darem a volta por cima e se tornarem lucrativas.<br /> <strong>E sabe qual o nosso segredo para isso?</strong></h3>

                    <ul className="sobre__market-list">
                        <li className="sobre__item">
                            <div className="sobre__market-text"><p>Temos uma <strong>metodologia hands on</strong>, ou seja, colocamos a mão na massa junto com nossos clientes, identificando onde estão os gaps, implementando planos de ação para reverter o cenário, acompanhando passo a passo o que está sendo feito e corrigimos a rota a qualquer momento até alcançar o resultado esperado</p></div>
                            <figure style={{ backgroundImage: "url(/static/img/img_solid8.jpg)" }} className="sobre__market-fig sobre__market-fig--right"></figure>
                        </li>
                        <li className="sobre__item">
                            <figure style={{ backgroundImage: "url(/static/img/img_solid9.jpg)" }} className="sobre__market-fig sobre__market-fig--left"></figure>
                            <div className="sobre__market-text">
                                <p className="sobre__p"><strong>Eduardo Bogalheira</strong>, CEO da Solid, acumula mais de XX anos de experiência no mercado corporativo, ocupando cargos de liderança em importantes empresas dos setores de Logística, Automobilística e XX.</p>
                                <p className="sobre__p">Além disso, a Solid conta com a equipe experiente, qualificada e com amplo conhecimento técnico, focada em melhorar os resultados de gestão e maximizar os lucros sempre atendendo aos objetivos estratégicos traçados pelos clientes.</p>
                                <p>Usando técnicas modernas de gestão, eliminamos as causas que ocasionam os problemas ao mesmo tempo em que treinamos seus colaboradores.</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="sobre__crescer">
                    <h3 className="impacto__title">Como ajudamos seu negócio a crescer</h3>
                    <ul className="sobre__crescer-list">
                        <li className="sobre__crescer-item">
                            <figure className="sobre__icons">
                                <img src="/static/img/setting-gears.svg" />
                            </figure>
                            <h3 className="sobre__crescer-h3">Gestão<br /><b>Estratégica</b></h3>
                            <p className="sobre__crescer-text">Quando falamos de Consultoria em Gestão de Pessoas logo associamos ao desenvolvimento e capacitação do capital humano.</p>
                            <a className="sobre__saiba">Saiba mais</a>
                        </li>
                        <li className="sobre__crescer-item">
                            <figure className="sobre__icons">
                                <img src="/static/img/multiple-users.svg" />
                            </figure>
                            <h3 className="sobre__crescer-h3">Consultoria em<br /><b>Gestão de Pessoas</b></h3>
                            <p className="sobre__crescer-text">Nosso modelo de treinamento ajuda os líderes a gerirem de forma efetiva uma equipe, aprendendo a dar feedbacks de maneira corret, delegar tarefas, comunicar-se com assertividade.</p>
                            <a className="sobre__saiba">Saiba mais</a>
                        </li>
                        <li className="sobre__crescer-item">
                            <figure className="sobre__icons">
                                <img src="/static/img/desktop-monitor.svg" />
                            </figure>
                            <h3 className="sobre__crescer-h3">Software de<br /><b>Gestão Empresarial</b></h3>
                            <p className="sobre__crescer-text">Por meio desse sistema, o gestor passa a ter acesso a um dashboard, onde tem a possibilidade de acompanhar a evolução dos resultados em tempo real e de qualquer lugar.</p>
                            <a className="sobre__saiba">Saiba mais</a>
                        </li>
                    </ul>
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