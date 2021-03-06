import { connect } from "react-redux";
import Router from "next/router";
import Head from 'next/head';

import NavMenu from "../components/NavMenu";
import Impacto from "../components/Impacto";
import Equipe from "../components/Equipe";
//import Clientes from "../components/Clientes";
import EbookConteudo from "../components/EbookConteudo";

import { request } from '../utils/request';

class Home extends React.Component {
    static async getInitialProps() {
        let data = await request('homes');

        data = data[0];

        return data;
    }

    constructor(props) {
        super(props);

        this.state = {
            artigo: 0,
            sec: 0
        }
    }

    render() {
        const { artigo } = this.state;
        const { posts, prefix, texto, titulo, descricao, imagem } = this.props;

        return(
            <React.Fragment>
                <Head>
                    <title>{titulo}</title>
                    <meta content={descricao} name="description" />
                </Head>
                <section style={{ backgroundImage: `url(${prefix + imagem.url})` }} ref={el => this.container = el} className="container container__home">
                    <header ref={el => this.header = el} className="header">
                        <NavMenu />
                        <div className="header__info">
                            <h1 className="header__h2">{texto}</h1>

                            <button onClick={() => Router.push({ pathname: '/contato' })} className="header__button">Fale com nossos consultores</button>
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
                    {/*<Clientes />*/}
                    <section className="blog">
                        <h3 className="impacto__title">Artigos do <b> Blog SOLID</b></h3>
                        <ul className="blog__postblog">
                            {
                                !!posts.list.length &&
                                posts.list.slice(0, 3).map(({ conteudo, createdAt, titulo, id, imagem_principal }, i) => 
                                    <li key={i} onClick={() => Router.push({ pathname: "/blog", query: { artigo: id } })} onMouseEnter={() => this.setState({ artigo: i })} style={{ backgroundImage: `url(${prefix + imagem_principal.url})` }} className={`blog__artigo ${artigo == i && "blog__artigo--selected"}`}>
                                        <div className="blog__text">
                                            <p className="blog__title"><b>{titulo}</b></p>
                                            <p className="blog__date"><img className="blog__calendar" src="/static/img/calendar.svg"/> {createdAt.split("T")[0]}</p>
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
            </React.Fragment>
        )
    }
} 

export default connect(state => state)(Home);

//<img className="blog__foto" src={prefix + imagem_principal.url} />
//Transforme a gestão da sua<br/> empresa e acelere seu crescimento com a Solid