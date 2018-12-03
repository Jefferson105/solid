import { connect } from "react-redux";

class Clientes extends React.Component {
    render() {
        return(
            <section className="clientes">
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
        );
    }
}

export default connect()(Clientes);