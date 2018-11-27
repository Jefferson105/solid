import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import styled from "styled-components";

import { HeaderMini, HeaderTitle, TxtMini } from "../components/styles";

import HeaderMedium from "../components/styles/elements/HeaderMedium";

const ContainerEmail = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: 5rem;
    text-align: center;
`;

const TitleEmail = styled.h3`
    color: #223952;
    font-size: 2.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
`;

const TextEmail = styled.p`
    font-size: 1.5rem;
    color: #333;
`;

const EmailInfo = styled.div`
    display: flex;
`;

const InfoBox = styled.div`
    width: 50%;
    display: flex;
    height: 12rem;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${props => props.bgColor};
    color: #FFF;
    font-weight: bold;
`;

const IconInfo = styled.span`
    position: absolute;
    height: 3.5rem;
    width: 3.5rem;
    top: -1.75rem;
    left: calc(50% - 1.75rem);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    border-radius: 50%;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 2rem;
    }
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                <HeaderMedium url="/static/img/quem-somos-header.jpg">
                    <HeaderTitle top={true}>Receba o contato de um <b>consultor especializado ainda hoje!</b></HeaderTitle>      
                </HeaderMedium>
                <section style={{ backgroundColor: "#F9F9F9" }}>
                    <div className="contato__formcontent">
                        <form className="contato__form">
                            <input type="name" className="contato__input" placeholder="Seu nome"/>
                            <input type="name" className="contato__input" placeholder="Seu nome"/>
                            <input type="name" className="contato__input2" placeholder="Seu nome"/>
                            <input type="name" className="contato__input2" placeholder="Seu nome"/>
                            <input type="name" className="contato__msg" placeholder="Seu nome"/>
                            <button style={{ marginTop: "2rem" }} className="header__button blog__button enviarform">Enviar</button>
                        </form>
                    </div>
                    <ContainerEmail>
                        <TitleEmail>Caso prefira, envie um e-mail ou ligue para nós.</TitleEmail>
                        <TextEmail>Nosso time de especialistas está preparado para te ajudar!</TextEmail>
                    </ContainerEmail>    
                    <EmailInfo>
                        <InfoBox bgColor="#051526">
                            <p style={{ fontSize: "1.8rem" }}>contato@solidsolucoes.com.br</p>
                            <IconInfo><img src="/static/img/envelope.svg" /></IconInfo>
                        </InfoBox>
                        <InfoBox bgColor="#1b4e85">
                            <p style={{ fontSize: "2.3rem" }}>11 4330-2784</p>
                            <IconInfo><img src="/static/img/telephone.svg" /></IconInfo>
                        </InfoBox>
                    </EmailInfo>
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
        