import { connect } from "react-redux";
import Router from 'next/router';

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
        //console.log(window.innerHeight / 2, this.li1.getBoundingClientRect().top);
        const changeAnimation = ({ position, top, marginTop, translate }) => {
            this.animation.style.position = position;
            this.animation.style.top = top;
            this.animation.style.marginTop = marginTop;
            this.animation.style.transform = `translateX(${translate})`;
        }
        
        if(window.innerHeight / 2 > this.li1.getBoundingClientRect().top) {
            changeAnimation({ position: 'fixed', top: '50%', marginTop: '0', translate: '-7px' });
        }else {
            changeAnimation({ position: 'relative', top: '0', marginTop: '7rem', translate: '0' });
        }

        if(window.innerHeight / 2 > this.li2.getBoundingClientRect().top) {
            this.anim3.classList.add('animation__item--selected');
        }

        if(window.innerHeight / 2 > this.li3.getBoundingClientRect().top) {
            this.anim2.classList.add('animation__item--selected');
        }

        if(window.innerHeight / 2 > this.li4.getBoundingClientRect().top) {
            this.anim1.classList.add('animation__item--selected');
            changeAnimation({ position: 'relative', top: '0', marginTop: 'auto', translate: '0' });
        }

        //if(!this.li1) return;

        //if(window.innerHeight > this.li1.getBoundingClientRect().top) this.setState({ show1: true });
        //if(window.innerHeight > this.li2.getBoundingClientRect().top) this.setState({ show2: true });
        //if(window.innerHeight > this.li3.getBoundingClientRect().top) this.setState({ show3: true });
        //if(window.innerHeight > this.li4.getBoundingClientRect().top) this.setState({ show4: true });
    }

    render() {
        const { show1, show2, show3, show4 } = this.state;

        return(
            <section ref={el => this.impacto = el} className="impacto">
                <h3 className="impacto__title">Como geramos <b>impacto no seu negócio</b></h3>
                <div style={{ display: "flex" }}>
                <div className="impacto__animation">
                    <ul ref={el => this.animation = el} className="animation">
                        <li ref={el => this.anim1 = el} className="animation__item"><i></i></li>
                        <li ref={el => this.anim2 = el} className="animation__item"><i></i></li>
                        <li ref={el => this.anim3 = el} className="animation__item"><i></i></li>
                        <li className="animation__item animation__item--selected"><i></i></li>
                    </ul>
                </div>
                <ul className="impacto__list">
                    <li ref={(el) => this.li1 = el} className={`impacto__item ${show1 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">1</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"> Planejamento<b> Estratégico</b></h4>
                             
                            <p className="impacto__p"><br />O ritmo de crescimento do negócio estagnou? Já parou para pensar que o problema pode estar na gestão corporativa? As falhas no
                                 processo de gestão das companhias são as grandes responsáveis pelo não atingimento de metas, ROI e demais problemas organizacionais.
                                Nós te apoiamos a virar essa página e retomar o crescimento.  <br></br><b onClick={() => Router.push('/gestao-estrategica')}>Saiba mais.</b>
                            </p>
                        </div>
                    </li>
                    <li ref={(el) => this.li2 = el} className={`impacto__item ${show2 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">2</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"><b>Desenvolvimento de Pessoas</b></h4>
                            <p className="impacto__p">
                                Empresas são resultados de pessoas. Se não forem  pertencentes e engajadas, consequentemente, os resultados ficarão aquém do desejado. Desenhamos uma oferta de consultoria em gestão de pessoas, de acordo com as necessidades, para manter os colaboradores da empresa totalmente alinhados com o seu plano de negócio.
                                 <br /> <b onClick={() => Router.push('/gestao-empresarial')}>Saiba mais.</b></p>
                        </div>
                    </li>
                    <li ref={(el) => this.li3 = el} className={`impacto__item ${show3 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">3</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"><b>Software de Gestão</b> customizado</h4>
                            <p className="impacto__p">Para transformar a sua empresa e acelerar os resultados, é importante gerir bem as informações para ter uma tomada de decisão assertiva. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.<br /> <b onClick={() => Router.push('/gestao-pessoas')}>Saiba mais</b>.</p>
                        </div>
                    </li>
                    <li ref={(el) => this.li4 = el} className={`impacto__item ${show4 && "impacto__item--show"}`}>
                        <div className="impacto__div1">
                            <p className="impacto__num-container"><span className="impacto__num">4</span></p>
                        </div>
                        <div className="impacto__div2">
                            <h4 className="impacto__h4"><b>Marketing e</b> vendas</h4>
                            <p className="impacto__p">  Depois de implementar todas as mudanças necessárias para o crescimento é a hora de pensar em dois pontos essenciais: como estruturar e acelerar o processo de vendas e se comunicar adequadamente com todo o ecossistema. Entenda como a Solid pode ajudar. <br /> <b onClick={() => Router.push('/vendas-marketing')}>Saiba mais</b>.</p>
                        </div>
                    </li>
                </ul>
                </div>
            </section>
        )
    }
}

export default connect(state => state)(Impacto);