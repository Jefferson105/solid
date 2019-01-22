import Router from "next/router";

const Equipe = () => 
    <section className="equipe">
        <h3 className="impacto__title">Nossa<b> Equipe</b></h3>
        <ul className="equipe__list">
            <li className="equipe__item">
                <figure className="equipe__perfil">
                    <img className="equipe__img" src="/static/img/presidente.jpeg"/>   
                </figure>
                <div className="equipe__info">
                    <b>Eduardo Bogalheira</b>
                    <p className="equipe__cargo">Presidente</p>
                    <p className="equipe__post">Com mais de 30 anos de carreira executiva, Bogalheira acumula experiência em cargos de liderança em diversas empresas. Há 30 anos, está do "outro lado do balcão", atuando em consultoria de negócio e colocando a mão na massa junto com os clientes para acelerar os resultados e transformar as empresas.</p>
                    </div>
            </li>
            <li className="equipe__item">
                <figure className="equipe__perfil">
                    <img className="equipe__img" src="/static/img/coach.jpeg"/>   
                </figure>
                <div className="equipe__info">
                    <b>Patrícia Bogalheira</b>
                    <p className="equipe__cargo">Diretora de Treinamento</p>
                    <p className="equipe__post">Especialista em gestão de pessoas, Patrícia atua no ramo corporativo há mais de 10 anos, hoje com foco em desenvolver líderes na essência dentro das organizações, além de implantar metodologias inovadoras de relacionamento com o colaborador, que garantam o sentimento de pertencimento à todos no time.</p>
                </div>
            </li>
            <li className="equipe__item">
                <figure className="equipe__perfil">
                    <img className="equipe__img" src="/static/img/diretora-comercial.jpeg"/>   
                </figure>
                <div className="equipe__info">
                    <b>Jéssica Paraguassu</b>
                    <p className="equipe__cargo">Diretora Comercial</p>  
                    <p className="equipe__post">Formada em Relações Internacionais e pós graduada em Gestão de Negócios com  ampla experiência no mercado de startups e modelos de negócios revolucionários, Jéssica tem a missão de tornar a operação da Solid cada vez mais inovadora. Para isso, está em constante atualização a respeito de novas tecnologias e tendências, criando modelos comerciais replicáveis para negócios diversos. </p>
                </div>
            </li>
        </ul>
        <button onClick={() => Router.push("/sobre")} className="header__button blog__button">Saiba mais</button>
    </section>

export default Equipe;