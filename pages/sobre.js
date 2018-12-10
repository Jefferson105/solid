import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import Equipe from "../components/Equipe";
import Crescer from "../components/Crescer";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container container__sobre">
                <NavMenu isFixed={true} />
                <header className="sobre__header">
                    <h2 className="sobre__title">Não somos uma simples consultoria de gestão, somos uma empresa que nasceu para transformar seu negócio e acelerar os resultados.</h2>      
                    <button className="header__arrow-down"><img src="/static/img/expand-button.svg" /></button>
                </header>
                <section className="sobre__market">
                    <h3 className="sobre__h3">Estamos no mercado há 15 anos e, desde então, já ajudamos centenas de empresas a darem a volta por cima e se tornarem lucrativas.<br /> <strong>E sabe qual o nosso segredo para isso?</strong></h3>

                    <ul className="sobre__market-list">
                        <li className="sobre__item">
                            <div className="sobre__market-text"><p>Temos uma <strong>metodologia hands on</strong>, ou seja, colocamos a mão na massa junto com nossos clientes, identificando onde estão os gaps, implementando planos de ação para reverter o cenário, acompanhando passo a passo o que está sendo feito e corrigimos a rota a qualquer momento até alcançar o resultado esperado.</p></div>
                            <figure style={{ backgroundImage: "url(/static/img/hands_on.jpg)" }} className="sobre__market-fig sobre__market-fig--right"></figure>
                        </li>
                        <li className="sobre__item">
                            <figure style={{ backgroundImage: "url(/static/img/presidente-total.jpeg)" }} className="sobre__market-fig sobre__market-fig--left"></figure>
                            <div className="sobre__market-text">
                                <p className="sobre__p"><strong>Eduardo Bogalheira</strong>, CEO da Solid, acumula mais de 30 anos de experiência no mercado corporativo, ocupando cargos de liderança em importantes empresas dos setores de Logística, Automobilística e Indústria.</p>
                                <p className="sobre__p">Além disso, a Solid conta com a equipe experiente, qualificada e com amplo conhecimento técnico, focada em melhorar os resultados de gestão e maximizar os lucros sempre atendendo aos objetivos estratégicos traçados pelos clientes.</p>
                                <p>Usando técnicas modernas de gestão, eliminamos as causas que ocasionam os problemas ao mesmo tempo em que treinamos seus colaboradores.</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <Crescer />
                <Equipe />
            </section>
        )
    }
}                
    
export default connect(state => state)(Home);