import { connect } from "react-redux";

class Impacto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false
        }

        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount() {
        document.body.onscroll = this.checkScroll;
    }

    checkScroll() {
        if(!this.li1) return;

        if(window.innerHeight > this.li1.getBoundingClientRect().top) this.setState({ show1: true });
        if(window.innerHeight > this.li2.getBoundingClientRect().top) this.setState({ show2: true });
        if(window.innerHeight > this.li3.getBoundingClientRect().top) this.setState({ show3: true });
        if(window.innerHeight > this.li4.getBoundingClientRect().top) this.setState({ show4: true });
    }

    render() {
        const { show1, show2, show3, show4 } = this.state;

        return(
            <section ref={el => this.impacto = el} className="impacto">
                <h3 className="impacto__title">Como geramos <b>impacto no seu negócio</b></h3>
                <ul className="impacto__list">
                    <li ref={(el) => this.li1 = el} className={`impacto__item ${show1 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">1</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4">Análise <b>empresarial</b></h4>
                            <p className="impacto__p">O ritimo de crescimento do negócio estagnou? Você já parou para pensar que o problema pode estar na gestão corporativa? Por mais delorido que seja para um CEO ou diretor ouvir isso, as falhas no processo de gestão das companhias são grandes responsáveis pelo não atingimento de metas,DOI e demais problemas organizacionais que possam existir. Nós te apoiamos a virar essa página e retomar o crescimento.<br /> <b>Saiba mais.</b>
                            </p>
                        </div>
                    </li>
                    <li ref={(el) => this.li2 = el} className={`impacto__item ${show2 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">2</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"><b>Software de gestão</b> Custumizado</h4>
                            <p className="impacto__p">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.<br /> <b>Saiba mais.</b></p>
                        </div>
                    </li>
                    <li ref={(el) => this.li3 = el} className={`impacto__item ${show3 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">3</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4">Como geramos <b>impacto no seu negócio</b></h4>
                            <p className="impacto__p">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.<br /> <b>Saiba mais</b>.</p>
                        </div>
                    </li>
                    <li ref={(el) => this.li4 = el} className={`impacto__item ${show4 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">4</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"><b>Vendas e</b> Marketing</h4>
                            <p className="impacto__p">Para fechar o tripé necessário para transformar a sua empresa e acelerar os resultados, é importante investir em tecnologia. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.<br /> <b>Saiba mais</b>.</p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default connect(state => state)(Impacto);