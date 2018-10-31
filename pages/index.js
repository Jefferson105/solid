import { connect } from "react-redux";

import Header from "../components/Header";

const Home = () =>
    <section className="container">
        <Header />
        <section className="impacto">
            <h3 className="impacto__title">Como geramos <b>impacto no seu negócio</b></h3>
            <ul className="impacto__list">
                <li className="impacto__item impacto__item--border">
                    <div className="impacto__div1">
                        <p className="impacto__num-container"><span className="impacto__num">1</span></p>
                    </div>
                    <div className="impacto__div2">
                        <h4 className="impacto__h4">Análise <b>empresarial</b></h4>
                        <p className="impacto__p">O ritimo de crescimento do negócio estagnou? Você já parou para pensar que o problema pode estar na gestão corporativa? Por mais delorido que seja para um CEO ou diretor ouvir isso, as falhas no processo de gestão das companhias são grandes responsáveis pelo não atingimento de metas,DOI e demais problemas organizacionais que possam existir. Nós te apoiamos a virar essa página e retomar o crescimento. <b>Saiba mais.</b>
                        </p>
                    </div>
                </li>
                <li className="impacto__item impacto__item--border">
                    <div className="impacto__div1">
                        <p className="impacto__num-container"><span className="impacto__num">2</span></p>
                    </div>
                    <div className="impacto__div2">
                        <h4 className="impacto__h4"><b>Software de gestão</b> Custumizado</h4>
                        <p className="impacto__p">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa. <b>Saiba mais.</b></p>
                    </div>
                </li>
                <li className="impacto__item">
                    <div className="impacto__div1">
                        <p className="impacto__num-container"><span className="impacto__num">3</span></p>
                    </div>
                    <div className="impacto__div2">
                        <h4 className="impacto__h4">Como geramos <b>impacto no seu negócio</b></h4>
                        <p className="impacto__p">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa. <b>Saiba mais</b>.</p>
                    </div>
                </li>
            </ul>
        </section>
        <section className="clientes">
        <h3 className="impacto__title">Alguns de nossos <b> clientes satisfeitos</b></h3>
        <div className="clientes__conteudo">
            <figure className="clientes__figure">
                <img className="clientes__user" src="/static/img/wallpapersden.com_chris-pine-handsome-pics_1024x1024.jpg"/>
            </figure>
                    <div className="clientes__avaliacao">
                        <p className="clientes__p">acelerar os resultados, é importante investir em tecnologia.  Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.<br/><b className="clientes__b">Felipe Viana</b></p>
                        
                        <img className="clientes__empresa" src="/static/img/amazon-logo-icon-png_44637.png"/>
                        <button className="header__button cases">Conheça nossos cases</button>
                    </div>
        </div>

        </section>
    </section>

export default connect(state => state)(Home);