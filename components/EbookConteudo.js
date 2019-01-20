import { connect } from "react-redux";

const EbookConteudo = ({ prefix, banners }) => {
    let banner = null;
    
    if(banners.fetched) banner = banners.list.filter(({ local }) => local.local == 'home')[0]; 

    return (
        <section className="conheca">
            {
                !!banner &&
                <a target="_blank" className="conheca__link" href={banner.link}><img className="conheca__img" src={prefix + banner.banner.url} /></a>
            }
        </section>
    )
}

export default connect(state => state)(EbookConteudo);

/*
<div className="conheca__info">
    <h3 className="conheca__h3">Como a Solid ajudou a ABC Cargas a sair do prejuízo?</h3>
    <a target="_blank" href="https://mailchi.mp/d6b22e18739f/case-lucro-abc-cargas" className="conheca__button">Descubra</a>
</div>
<figure className="conheca__figure">
    <img className="conheca__img" src="/static/img/livro.png"/> 
</figure>
*/