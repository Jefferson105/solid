import Router from "next/router";

const EbookConteudo = () =>
    <section className="conheca">
        <div className="conheca__info">
            <h3 className="conheca__h3">Conheça mais conteúdos para transformar o seu negócio</h3>
            <button onClick={() => Router.push('/clientes')} className="conheca__button">Descubra</button>
        </div>
        <figure className="conheca__figure">
            <img className="conheca__img" src="/static/img/livro.png"/> 
        </figure>
    </section>

export default EbookConteudo;