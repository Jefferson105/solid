import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import styled from "styled-components";

import { HeaderMini, HeaderTitle, ButtonHeader, IconHeader } from "../components/styles";

const ListClients = styled.ul`
    list-style: none;
    max-width: 1000px;
    margin: 5rem auto;
`;

const ListItem = styled.li`
    display: flex;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
    border-radius: 10px;
    margin-bottom: 3rem;
`;

const FigItem = styled.figure`
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    width: 30%;
    clip-path: ${props => props.right ? "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)" };
`;

const ClienteInfo = styled.div`
    padding: 2rem 6rem 2rem 3rem;
    width: 70%;
    box-sizing: border-box;
`;

const LogoCliente = styled.img`
    height: 4rem;
`;

const ClienteTxt = styled.p`
    color: #1B4E85;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ClientButton = styled.button`
    background-color: #1B4E85;
    color: #FFF;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 25px;
    padding: .5rem 1.5rem;
    margin-top: 1rem;
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container container__sobre">
                <NavMenu isFixed={true} />
                
                <HeaderMini url="/static/img/header-clientes.jpg">
                    <HeaderTitle color="#FFF">Veja como a Solid vem <b>transformando empresas</b></HeaderTitle>      
                    <ButtonHeader mini={true}><IconHeader mini={true} src="/static/img/expand-button.svg" /></ButtonHeader>
                </HeaderMini>

                <section>
                    <ListClients>
                        <ListItem>
                            <FigItem url="/static/img/cliente1.jpg" />
                            <ClienteInfo>
                                <LogoCliente src="/static/img/abclogo.jpg" />
                                <ClienteTxt>Veja como a Solid ajudou a ABC Cargas a sair do prejuízo para o lucro de R$ 6 milhões, em 1 ano</ClienteTxt>
                                <ClientButton>Download Case</ClientButton>
                            </ClienteInfo>
                        </ListItem>
                        <ListItem>
                            <ClienteInfo>
                                <LogoCliente src="/static/img/abclogo.jpg" />
                                <ClienteTxt>Veja como a Solid ajudou a ABC Cargas a sair do prejuízo para o lucro de R$ 6 milhões, em 1 ano</ClienteTxt>
                                <ClientButton>Download Case</ClientButton>
                            </ClienteInfo>
                            <FigItem right={true} url="/static/img/cliente2.jpg" />
                        </ListItem>
                        <ListItem>
                            <FigItem url="/static/img/cliente3.jpg" />
                            <ClienteInfo>
                                <LogoCliente src="/static/img/abclogo.jpg" />
                                <ClienteTxt>Veja como a Solid ajudou a ABC Cargas a sair do prejuízo para o lucro de R$ 6 milhões, em 1 ano</ClienteTxt>
                                <ClientButton>Download Case</ClientButton>
                            </ClienteInfo>
                        </ListItem>
                    </ListClients>
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