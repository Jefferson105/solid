import { connect } from "react-redux";
import Router, { withRouter } from 'next/router';

import NavMenu from "../../components/NavMenu";
import SlideArticles from "../../components/styles/blocks/slide-articles";
import HeaderMedium from "../../components/styles/elements/HeaderMedium";
import CardArticle from "../../components/styles/blocks/card-article";
import BookAside from "../../components/styles/blocks/book-aside";
import CategoryAside from "../../components/styles/blocks/categories-aside";
import EbookConteudo from '../../components/EbookConteudo';

import { getCategorias } from '../../actions/index';

import { HeaderTitle } from "../../components/styles";
import Loading from "../../components/styles/elements/Loading";

class Blog extends React.Component {
    componentDidMount() {
        this.props.dispatch(getCategorias());
    }

    render() {
        const { categorias, posts, router, prefix } = this.props;

        let categoria = router.query.categoria ? categorias.list.find(c => c.id === router.query.categoria) : null;
        let artigo = router.query.artigo ? posts.list.find(p => p.id === router.query.artigo) : posts.list[0];

        let hasArtigo = !!router.query.artigo;
        let not_found = false;

        if(hasArtigo && !artigo) {
            not_found = true;
            artigo = posts.list[0];
        }

        let listPosts = [];

        if(categoria && posts.fetched) listPosts = posts.list.filter((p) => p.categoria.nome.replaceSpecialChars().toLowerCase() == categoria.nome.replaceSpecialChars().toLowerCase());
        else listPosts = posts.list;

        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                { 
                    !!(categoria || artigo) &&
                    <HeaderMedium url="/static/img/header-pessoas.jpg">
                        {
                            !!categoria ?
                                <HeaderTitle color="#FFF">{categoria.nome}</HeaderTitle> :
                                <SlideArticles>
                                    <SlideArticles.Item>
                                        <SlideArticles.Category>{artigo.categoria.nome}</SlideArticles.Category>
                                        <SlideArticles.Title>{artigo.titulo}</SlideArticles.Title>
                                        { !hasArtigo && <CardArticle.Button onClick={() => Router.push({ pathname: '/blog', query: { artigo: artigo.id } })}>Leia mais</CardArticle.Button> }
                                    </SlideArticles.Item>
                                </SlideArticles>
                        }
                    </HeaderMedium> 
                }
                <section style={{ display: "flex", width: "90%", margin: "7rem auto 2rem auto" }}>
                    <div style={{ width: "70%" }}>
                        {
                            hasArtigo ?
                                !!listPosts.length && 
                                <div>
                                    {
                                        !not_found ?
                                            <React.Fragment>
                                                <h3 style={{ fontSize: "34px", marginBottom: "2rem", color: "#494949", lineHeight: "30px" }}>{artigo.titulo}</h3>
                                                <div style={{ whiteSpace: "pre-wrap" }}>{artigo.conteudo}</div>
                                            </React.Fragment> :
                                            <CardArticle.Title>Artigo não encontrado. <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => Router.push('/blog')}>Ver outros.</span></CardArticle.Title>
                                    }
                                </div> :
                                !posts.fetched ?
                                <p style={{ color: "#1B4E85" }}>Carregando <Loading src="/static/img/loading.svg" /></p> :
                                listPosts.length ?
                                <CardArticle>
                                    {
                                        listPosts.map(({ categoria, titulo, conteudo, id, imagem_principal }, i) => 
                                            <CardArticle.Item key={i}>
                                                <CardArticle.Figure url={prefix + imagem_principal.url} />
                                                <CardArticle.Info>
                                                    <CardArticle.Category>{categoria.nome}</CardArticle.Category>
                                                    <CardArticle.Title>{titulo}</CardArticle.Title>
                                                    <CardArticle.Text dangerouslySetInnerHTML={{ __html: `${conteudo.slice(0, 100)} ...` }} />
                                                    <CardArticle.Button onClick={() => Router.push({ pathname: '/blog', query: { artigo: id } })}>Leia mais</CardArticle.Button>
                                                </CardArticle.Info>
                                            </CardArticle.Item>    
                                        )
                                    }
                                </CardArticle> :
                                <CardArticle.Title>Em breve teremos artigos aqui.</CardArticle.Title>
                        }
                    </div>
                    <aside style={{ width: "30%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <BookAside>
                            <BookAside.Image src="/static/img/livro.png" />
                            <BookAside.Text>Como a Solid ajudou a ABC Cargas a sair do prejuízo?</BookAside.Text>
                            <BookAside.Button target="_blank" href="https://mailchi.mp/d6b22e18739f/case-lucro-abc-cargas">Descubra</BookAside.Button>
                        </BookAside>
                        {
                            !!categorias.fetched &&
                            <CategoryAside>
                                <CategoryAside.Title>Categorias</CategoryAside.Title>
                                { categorias.list.map(({ nome, id }, i) => <CategoryAside.Category onClick={() => Router.push({ pathname: '/blog', query: { categoria: id } })}>{nome}</CategoryAside.Category> ) }  
                            </CategoryAside>
                        }
                        <div>
                            <div className="footer__box">
                                <h4 className="footer__title">Receba dicas para transformar seu negócio</h4>
                                <form action="https://solidsolucoes.us19.list-manage.com/subscribe/post?u=f6a8b65cd28d281b2c0856998&amp;id=bc061a8c5b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                                    <input className="footer__input footer__input--marg" type="email" name="EMAIL" placeholder="Seu e-mail" />
                                    <input className="footer__input" name="FNAME" type="text" placeholder="Seu nome" />
                                    <button className="header__button footer__button">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </aside>
                </section>
                <EbookConteudo />
             </section>
      )
    }
}                
 
export default withRouter(connect(state => state)(Blog));
        

/*
<SlideArticles.Arrow side="left"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>
<SlideArticles.Arrow side="right"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>

<SlideArticles.InfoContent>
    <SlideArticles.Photo><img src="/static/img/img_solid3.jpg" /></SlideArticles.Photo>
    <SlideArticles.Name>Por <b>Andreia Gonçalves</b></SlideArticles.Name>
</SlideArticles.InfoContent>

<CardArticle.Author>
                                                    <CardArticle.Photo url="/static/img/img_solid3.jpg" />
                                                    <CardArticle.Name>Por <b>Andreia Gonçalves</b></CardArticle.Name>
                                                </CardArticle.Author>

<CardArticle.Pagination>
                            <CardArticle.Num>1</CardArticle.Num>
                            <CardArticle.Num>2</CardArticle.Num>
                            <CardArticle.Num>3</CardArticle.Num>
                            <CardArticle.Num>4</CardArticle.Num>
                            <CardArticle.Proximo>Próxima página</CardArticle.Proximo>
                        </CardArticle.Pagination>
*/