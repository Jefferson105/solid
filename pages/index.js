import { connect } from "react-redux";

import Router from "next/router";

import NavMenu from "../components/NavMenu";
import Impacto from "../components/Impacto";
import Equipe from "../components/Equipe";
import Clientes from "../components/Clientes";
import EbookConteudo from "../components/EbookConteudo";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artigo: 0,
            sec: 0
        }
    }

    render() {
        const { artigo, sec } = this.state;
        const { posts } = this.props;

        return(
            <section ref={el => this.container = el} className="container container__home">
                <header ref={el => this.header = el} className="header">
                    <NavMenu />
                    <div className="header__info">
                        <h2 className="header__h2">Transforme a gestão da sua<br/> empresa e acelere seu crescimento com a Solid</h2>

                        <button onClick={() => Router.push('/contato')} className="header__button">Fale com nossos consultores</button>
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
                <Clientes />
                <section className="blog">
                    <h3 className="impacto__title">Artigos do <b> Blog SOLID</b></h3>
                    <ul className="blog__postblog">
                        {
                            !!posts.list.length &&
                            posts.list.slice(0, 3).map(({ conteudo, createdat, titulo, id }, i) => 
                                <li key={i} onClick={() => Router.push({ pathname: "/blog", query: { artigo: id } })} onMouseEnter={() => this.setState({ artigo: i })} className={`blog__artigo ${artigo == i && "blog__artigo--selected"}`}>
                                    <img className="blog__foto" src="/static/img/blog.jpg"/>    
                                    <div className="blog__text">
                                        <p className="blog__title"><b>{titulo}</b></p>
                                        <p className="blog__date"><img className="blog__calendar" src="/static/img/calendar.svg"/> {createdat.split("T")[0]}</p>
                                        <p className="blog__post" dangerouslySetInnerHTML={{ __html: `${conteudo.slice(0, 100)}...` }} />
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <button className="header__button blog__button" onClick={() => Router.push('/blog')}>Conheça nosso blog</button>
                </section> 
                <EbookConteudo />
                <Equipe />
            </section>
        )
    }
} 

export default connect(state => state)(Home);