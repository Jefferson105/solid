import { connect } from "react-redux";
import Router, { withRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import NavMenu from "../../components/NavMenu";
import SlideArticles from "../../components/styles/blocks/slide-articles";
import HeaderMedium from "../../components/styles/elements/HeaderMedium";
import CardArticle from "../../components/styles/blocks/card-article";
import BookAside from "../../components/styles/blocks/book-aside";
import CategoryAside from "../../components/styles/blocks/categories-aside";
import EbookConteudo from '../../components/EbookConteudo';
import Pagination from '../../components/styles/blocks/pagination';

import { getCategorias } from '../../actions/index';

import { HeaderTitle } from "../../components/styles";
import Loading from "../../components/styles/elements/Loading";

import { request } from '../../utils/request';

class Blog extends React.Component {
    static async getInitialProps({ req }) {
        let artigo = null;

        if(!req || !req.params.id) return { artigo }; 

        if(req.params.id.replaceSpecialChars().toLowerCase().indexOf('-') > -1) {
            let splited = req.params.id.split('-');
            let id = splited[splited.length - 1];

            artigo = await request('posts/' + id);
        }

        return { artigo }
    }

    state = { page: 0 }

    componentDidMount() {
        this.props.dispatch(getCategorias());
    }

    render() {
        const { categorias, posts, router, prefix, banners } = this.props;
        const { page } = this.state;

        let categoria = router.query.categoria ? categorias.list.find(c => c.id === router.query.categoria) : null;

        let title = router.query.artigo || '';

        if(title && title.indexOf('-') > -1) {
            let tSplited = title.split('-');

            title = tSplited[tSplited.length - 1];
        } 

        let artigo = this.props.artigo ? this.props.artigo : title ? posts.list.find(p => p.id === title) : posts.list[0];

        let hasArtigo = !!title;
        let not_found = false;

        if(hasArtigo && !artigo) {
            not_found = true;
            artigo = posts.list[0];
        }

        let listPosts = [];

        if(categoria && posts.fetched) listPosts = posts.list.filter((p) => p.categoria.nome.replaceSpecialChars().toLowerCase() == categoria.nome.replaceSpecialChars().toLowerCase());
        else listPosts = posts.list;

        let banner = null;
    
        if(banners.fetched) banner = banners.list.filter(({ local }) => local.local == 'blog')[0]; 

        return(
            <React.Fragment>
                <Head>
                    <title>Solid Blog</title>
                    {
                        !!hasArtigo &&
                        <React.Fragment>
                            <meta property="og:title" content={artigo.titulo} />
                            <meta property="og:description" content={artigo.conteudo.slice(0,200) + '...'} />
                            <meta property="og:image" content={prefix + artigo.imagem_principal.url} />
                            <meta property="og:image:alt" content="Imagem principal do post" />
                        </React.Fragment>
                    }
                </Head>
                <section className="container contato container__sobre">
                    <NavMenu isFixed={true} />
                    { 
                        !!(categoria || artigo) &&
                        <HeaderMedium url={hasArtigo ? prefix + artigo.imagem_principal.url : '/static/img/header-pessoas.jpg'}>
                            {
                                !!categoria ?
                                    <HeaderTitle color="#FFF">{categoria.nome}</HeaderTitle> :
                                    <SlideArticles>
                                        <SlideArticles.Item>
                                            <SlideArticles.Category>{artigo.categoria.nome}</SlideArticles.Category>
                                            <SlideArticles.Title>{artigo.titulo}</SlideArticles.Title>
                                            { !hasArtigo && <CardArticle.Button onClick={() => Router.push(`/blog/artigo/${artigo.titulo.replaceSpecialChars().toLowerCase().split(' ').join('-').replace(/\W/g, '')}-${artigo.id}`)}>Leia mais</CardArticle.Button> }
                                        </SlideArticles.Item>
                                    </SlideArticles>
                            }
                        </HeaderMedium> 
                    }
                    <section className="sec-blog">
                        <div className="sec-blog__articles">
                            {
                                hasArtigo ?
                                    !!listPosts.length && 
                                    <div>
                                        {
                                            !not_found ?
                                                <React.Fragment>
                                                    <h3 style={{ fontSize: "34px", marginBottom: "2rem", color: "#494949", lineHeight: "30px" }}>{artigo.titulo}</h3>
                                                    <ReactMarkdown source={artigo.conteudo} />
                                                </React.Fragment> :
                                                <CardArticle.Title>Artigo não encontrado. <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => Router.push('/blog')}>Ver outros.</span></CardArticle.Title>
                                        }
                                    </div> :
                                    !posts.fetched ?
                                    <p style={{ color: "#1B4E85" }}>Carregando <Loading src="/static/img/loading.svg" /></p> :
                                    listPosts.length ?
                                    <React.Fragment>
                                        <CardArticle>
                                            {
                                                listPosts.slice(page * 5, (page * 5) + 5).map(({ categoria, titulo, autor, id, imagem_principal }, i) => 
                                                    <CardArticle.Item key={i}>
                                                        <CardArticle.Figure url={prefix + imagem_principal.url} />
                                                        <CardArticle.Info>
                                                            <CardArticle.Category>{categoria.nome}</CardArticle.Category>
                                                            <CardArticle.Title>{titulo}</CardArticle.Title>
                                                            <CardArticle.Author>
                                                                <CardArticle.Photo url={autor.path_img} />
                                                                <CardArticle.Name>Por <b>{autor.nome}</b></CardArticle.Name>
                                                            </CardArticle.Author>
                                                            <CardArticle.Text>
                                                                <ReactMarkdown source={artigo.conteudo.slice(0, 100) + '...'} />
                                                            </CardArticle.Text>
                                                            <CardArticle.Button onClick={() => Router.push(`/blog/artigo/${titulo.replaceSpecialChars().toLowerCase().split(' ').join('-').replace(/\W/g, '')}-${id}`)}>Leia mais</CardArticle.Button>
                                                        </CardArticle.Info>
                                                    </CardArticle.Item>    
                                                )
                                            }
                                        </CardArticle>
                                        <Pagination>
                                            {
                                                [...Array(Math.ceil(listPosts.length / 5))].map((_, i) => <Pagination.Num selected={i == page} onClick={() => this.setState({ page: i })}>{i + 1}</Pagination.Num>)
                                            }
                                            <Pagination.Next onClick={() => ((listPosts.length / (page + 1)) > 5) && this.setState({ page: page + 1 })}>Próxima Página</Pagination.Next>
                                        </Pagination> 
                                    </React.Fragment>:
                                    <CardArticle.Title>Em breve teremos artigos aqui.</CardArticle.Title>
                            }
                        </div>
                        <aside className="sec-blog__aside">
                            {
                                !!banner &&
                                <BookAside>
                                    <a target="_blank" href={banner.link}><BookAside.Image src={prefix + banner.banner.url} /></a>
                                </BookAside>
                            }
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
            </React.Fragment>
      )
    }
}

export default withRouter(connect(state => state)(Blog));
        

/*
<div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: replaceKeys(artigo.conteudo) }} />
{ pathname: '/blog', query: { artigo: artigo.id } }
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

<BookAside.Text>Como a Solid ajudou a ABC Cargas a sair do prejuízo?</BookAside.Text>
                                <BookAside.Button target="_blank" href="https://mailchi.mp/d6b22e18739f/case-lucro-abc-cargas">Descubra</BookAside.Button>
*/