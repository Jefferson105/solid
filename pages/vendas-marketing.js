import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";

import ListMarketing from "../components/styles/blocks/list-marketing";

import { HeaderMini, HeaderTitle, ButtonHeader, TxtBold, TxtMini, GreenButton, IconHeader, WrapperImg100 } from "../components/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container container__sobre">
                <NavMenu isFixed={true} />
                <HeaderMini url="/static/img/header-empresarial.jpg">
                    <HeaderTitle color="#FFF">Vendas e <b>Marketing</b></HeaderTitle>      
                    <ButtonHeader><IconHeader src="/static/img/funnel.svg" /></ButtonHeader>
                </HeaderMini>
               
                <section>
                    <TxtBold>Temos a fórmula certa para ajudar sua empresa a construir uma estrutura de máquina de venda com o objetivo de acelerar os resultados e aumentar o número de contratos fechados. Para isso, utilizamos uma metodologia revolucionária de vendas outbound.</TxtBold>
                
                    <ListMarketing>
                        <ListMarketing.Item>
                            <ListMarketing.Image url="https://msp2l1160225102310.blob.core.windows.net/ms-p2-l1-160225-1023-13-assets/Windows_Education_Office_1920_Office365_img.jpg" />
                            <ListMarketing.Phrase><p><b>Primeiro vamos entender o seu negócio e compreender sua estrutura comercial.</b> O próximo passo é definir quem são as personas e o público alvo e, então, construiremos uma estratégia go to market, juntamente com os canais de vendas adequados e a implementação da automação no processo de vendas.</p></ListMarketing.Phrase>
                        </ListMarketing.Item>
                        <ListMarketing.Item>
                            <ListMarketing.Phrase><p>Em paralelo a isso, é preciso saber como o mercado enxerga sua empresa. <b>Seus concorrentes sabem exatamento o que você faz? E você está se comunicando de forma correta com todos os stakeholders?</b></p></ListMarketing.Phrase>
                            <ListMarketing.Image url="https://msp2l1160225102310.blob.core.windows.net/ms-p2-l1-160225-1023-13-assets/Windows_Education_Office_1920_Office365_img.jpg" />
                        </ListMarketing.Item>
                        <ListMarketing.Item>
                            <ListMarketing.Image url="https://msp2l1160225102310.blob.core.windows.net/ms-p2-l1-160225-1023-13-assets/Windows_Education_Office_1920_Office365_img.jpg" />
                            <ListMarketing.Phrase><p>Para suprir o gap de comunicação do seu negócio, a Solid conta com uma área específica de comunicação, com foco em estratégias de Marketing. <b>Nosso propósito é construir adequadamente o posicionamento da sua marca no mercado por meio de trabalho de comunicação, visando a geração de leads.</b></p></ListMarketing.Phrase>
                        </ListMarketing.Item>
                    </ListMarketing>

                    <GreenButton>Fale com nossos consultores</GreenButton>
                </section>
                <section className="sobre__crescer">
                    <h3 className="impacto__title">Fazemos ainda mais pelo seu negócio</h3>
                    <ul className="sobre__crescer-list sobre__crescer-list--center">
                        <li style={{ marginRight: "4rem" }} className="sobre__crescer-item">
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
                    </ul>
                </section>
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