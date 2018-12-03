import { connect } from "react-redux";
import NavMenu from "../../components/NavMenu";

import SlideArticles from "../../components/styles/blocks/slide-articles";
import HeaderMedium from "../../components/styles/elements/HeaderMedium";
import CardArticle from "../../components/styles/blocks/card-article";
import BookAside from "../../components/styles/blocks/book-aside";
import CategoryAside from "../../components/styles/blocks/categories-aside";

class Blog extends React.Component {
    render() {
        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                <HeaderMedium url="/static/img/header-pessoas.jpg">
                    <SlideArticles>
                        <SlideArticles.Arrow side="left"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>
                        <SlideArticles.Item>
                            <SlideArticles.Category>Categoria</SlideArticles.Category>
                            <SlideArticles.Title>Título do post com até 2 linhas irá entrar aqui</SlideArticles.Title>
                            <SlideArticles.InfoContent>
                                <SlideArticles.Photo><img src="/static/img/img_solid3.jpg" /></SlideArticles.Photo>
                                <SlideArticles.Name>Por <b>Andreia Gonçalves</b></SlideArticles.Name>
                            </SlideArticles.InfoContent>
                            <SlideArticles.Button>Leia mais</SlideArticles.Button>
                        </SlideArticles.Item>
                        <SlideArticles.Arrow side="right"><img src="/static/img/left-arrow.svg" /></SlideArticles.Arrow>
                    </SlideArticles>
                </HeaderMedium>
                <section style={{ display: "flex", width: "90%", margin: "7rem auto 2rem auto" }}>
                    <div style={{ width: "70%" }}>
                        <CardArticle>
                            {
                                [...Array(5)].map((_, i) => 
                                    <CardArticle.Item key={i}>
                                        <CardArticle.Figure url="/static/img/consultoria.jpg" />
                                        <CardArticle.Info>
                                            <CardArticle.Category>Categoria</CardArticle.Category>
                                            <CardArticle.Title>Título do post com até 2 linha irá entrar aqui</CardArticle.Title>
                                            <CardArticle.Author>
                                                <CardArticle.Photo url="/static/img/img_solid3.jpg" />
                                                <CardArticle.Name>Por <b>Andreia Gonçalves</b></CardArticle.Name>
                                            </CardArticle.Author>
                                            <CardArticle.Text>Temos a fórmula certa para ajudar sua empresa a construir uma estrutura de máquina de venda com o objetivo de acelerar os resultados e aumentar...</CardArticle.Text>
                                            <CardArticle.Button>Leia mais</CardArticle.Button>
                                        </CardArticle.Info>
                                    </CardArticle.Item>    
                                )
                            }
                        </CardArticle>

                        <CardArticle.Pagination>
                            <CardArticle.Num>1</CardArticle.Num>
                            <CardArticle.Num>2</CardArticle.Num>
                            <CardArticle.Num>3</CardArticle.Num>
                            <CardArticle.Num>4</CardArticle.Num>
                            <CardArticle.Proximo>Próxima página</CardArticle.Proximo>
                        </CardArticle.Pagination>
                    </div>
                    <aside style={{ width: "30%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <BookAside>
                            <BookAside.Image src="/static/img/livro.png" />
                            <BookAside.Text>Conheça mais conteúdos para transformar o seu negócio</BookAside.Text>
                            <BookAside.Button>Cadastrar</BookAside.Button>
                        </BookAside>
                        <CategoryAside>
                            <CategoryAside.Title>Categorias</CategoryAside.Title>
                            
                            <CategoryAside.Category>Categoria 1</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 2</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 3</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 4</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 5</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 6</CategoryAside.Category>
                            <CategoryAside.Category>Categoria 7</CategoryAside.Category>
                        </CategoryAside>
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
 
export default connect(state => state)(Blog);
        