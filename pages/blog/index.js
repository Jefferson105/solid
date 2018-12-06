import { connect } from "react-redux";
import Link from 'next/link';
import { withRouter } from 'next/router';

import NavMenu from "../../components/NavMenu";
import SlideArticles from "../../components/styles/blocks/slide-articles";
import HeaderMedium from "../../components/styles/elements/HeaderMedium";
import CardArticle from "../../components/styles/blocks/card-article";
import BookAside from "../../components/styles/blocks/book-aside";
import CategoryAside from "../../components/styles/blocks/categories-aside";

import { getCategorias } from '../../actions/index';

import { HeaderTitle } from "../../components/styles";

class Blog extends React.Component {
    componentDidMount() {
        this.props.dispatch(getCategorias());
    }

    render() {
        const { categorias, posts, router } = this.props;

        let categoria = router.query.categoria ? categorias.find(c => c.id === router.query.categoria) : null;
        let artigo = router.query.artigo ? posts.find(p => p.id === router.query.artigo) : posts[0];

        let hasArtigo = !!router.query.artigo;

        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                { 
                    !!(categoria || artigo) &&
                    <HeaderMedium url="/static/img/header-pessoas.jpg">
                        {
                            categoria ?
                                <HeaderTitle color="#FFF">{categoria.nome}</HeaderTitle> :
                                <SlideArticles>
                                    <SlideArticles.Item>
                                        <SlideArticles.Category>{artigo.categorias.Nome}</SlideArticles.Category>
                                        <SlideArticles.Title>{artigo.titulo}</SlideArticles.Title>
                                        <SlideArticles.InfoContent>
                                            <SlideArticles.Photo><img src="/static/img/img_solid3.jpg" /></SlideArticles.Photo>
                                            <SlideArticles.Name>Por <b>Andreia Gonçalves</b></SlideArticles.Name>
                                        </SlideArticles.InfoContent>
                                        <Link href={{ pathname: '/blog', query: { artigo: artigo.id } }}><CardArticle.Button>Leia mais</CardArticle.Button></Link>
                                    </SlideArticles.Item>
                                </SlideArticles>
                        }
                    </HeaderMedium> 
                }
                <section style={{ display: "flex", width: "90%", margin: "7rem auto 2rem auto" }}>
                    <div style={{ width: "70%" }}>
                        {
                            hasArtigo ?
                            posts.length && <div style={{ whiteSpace: "pre-wrap" }}>{artigo.conteudo}</div> :
                            !!posts.length &&
                            <CardArticle>
                                {
                                    posts.map(({ categorias, titulo, conteudo, id }, i) => 
                                        <CardArticle.Item key={i}>
                                            <CardArticle.Figure url="/static/img/consultoria.jpg" />
                                            <CardArticle.Info>
                                                <CardArticle.Category>{categorias.Nome}</CardArticle.Category>
                                                <CardArticle.Title>{titulo}</CardArticle.Title>
                                                <CardArticle.Author>
                                                    <CardArticle.Photo url="/static/img/img_solid3.jpg" />
                                                    <CardArticle.Name>Por <b>Andreia Gonçalves</b></CardArticle.Name>
                                                </CardArticle.Author>
                                                <CardArticle.Text dangerouslySetInnerHTML={{ __html: `${conteudo.slice(0, 100)} ...` }} />
                                                <Link href={{ pathname: '/blog', query: { artigo: id } }}><CardArticle.Button>Leia mais</CardArticle.Button></Link>
                                            </CardArticle.Info>
                                        </CardArticle.Item>    
                                    )
                                }
                            </CardArticle>
                        }
                    </div>
                    <aside style={{ width: "30%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <BookAside>
                            <BookAside.Image src="/static/img/livro.png" />
                            <BookAside.Text>Conheça mais conteúdos para transformar o seu negócio</BookAside.Text>
                            <BookAside.Button>Cadastrar</BookAside.Button>
                        </BookAside>
                        {
                            !!categorias.length &&
                            <CategoryAside>
                                <CategoryAside.Title>Categorias</CategoryAside.Title>
                                { categorias.map(({ nome, id }, i) => <Link key={i} href={{ pathname: '/blog', query: { categoria: id } }}><CategoryAside.Category>{nome}</CategoryAside.Category></Link> ) }  
                            </CategoryAside>
                        }
                        <div>
                            <div className="footer__box">
                                <h4 className="footer__title">Receba dicas para transformar seu negócio</h4>
                                <input className="footer__input footer__input--marg" placeholder="Seu e-mail" />
                                <input className="footer__input" placeholder="Seu nome" />
                                <button className="header__button footer__button">Cadastrar</button>
                            </div>
                        </div>
                    </aside>
                </section>
                <section ref={el => this.conheca = el} className="conheca">
                    <div className="conheca__info">
                        <h3 className="conheca__h3">Conheça mais conteúdos para transformar o seu negócio</h3>
                        <button className="conheca__button">Descubra</button>
                    </div>
                    <figure className="conheca__figure">
                        <img className="conheca__img" src="/static/img/livro.png"/> 
                    </figure>
                </section>
             </section>
      )
    }
}                
 
export default withRouter(connect(state => state)(Blog));
        

/*
<SlideArticles.Arrow side="left"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>
<SlideArticles.Arrow side="right"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>

<CardArticle.Pagination>
                            <CardArticle.Num>1</CardArticle.Num>
                            <CardArticle.Num>2</CardArticle.Num>
                            <CardArticle.Num>3</CardArticle.Num>
                            <CardArticle.Num>4</CardArticle.Num>
                            <CardArticle.Proximo>Próxima página</CardArticle.Proximo>
                        </CardArticle.Pagination>
*/