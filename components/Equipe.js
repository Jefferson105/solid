import { useSelector } from 'react-redux';
import Router from "next/router";

const Equipe = () => {
    const { prefix, equipe } = useSelector(state => state);

    return(
        <section className="equipe">
            <h3 className="impacto__title">Nossa<b> Equipe</b></h3>
            <ul className="equipe__list">
                {
                    equipe.list.map(eq => 
                        <li className="equipe__item">
                            <figure className="equipe__perfil">
                                <img className="equipe__img" src={prefix + eq.foto.url} />   
                            </figure>
                            <div className="equipe__info">
                                <b>{eq.nome}</b>
                                <p className="equipe__cargo">{eq.cargo}</p>
                                <p className="equipe__post">{eq.descricao}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
            <button onClick={() => Router.push("/sobre")} className="header__button blog__button">Saiba mais</button>
        </section>
    )
}

export default Equipe;