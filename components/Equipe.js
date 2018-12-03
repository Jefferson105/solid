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
                    <p className="equipe__post">Com mais de 30 anos de carreira executiva, Bogalheira acumula experiência em cargos de liderança em diversas empresas. Há 15 anos, está do "outro lado do balcão", atuando em consultoria de negócio e colocando a mão na massa junto com os clientes para acelerar os resultados e transformar as empresas.</p>
                    </div>
            </li>
            <li className="equipe__item">
                <figure className="equipe__perfil">
                    <img className="equipe__img" src="/static/img/coach.jpeg"/>   
                </figure>
                <div className="equipe__info">
                    <b>Patrícia Bogalheira</b>
                    <p className="equipe__cargo">Diretora de Treinamento</p>
                    <p className="equipe__post">Master/Executive Coach, especializada na Linguagem Ericsoniana, certificada pelo Instituto Brasileiro de Coaching - IBC e reconhecida pelas renomadas entidades Coaching do mundo. Patrícia atua para promover o autoconhecimento e self empowerment a empreendedores, executivos de alto comando, líderes e times de todos os setores.</p>
                </div>
            </li>
            <li className="equipe__item">
                <figure className="equipe__perfil">
                    <img  className="equipe__img" src="/static/img/img_solid3.jpg"/>   
                </figure>
                <div className="equipe__info">
                    <b>Jéssica Paraguassu</b>
                    <p className="equipe__cargo">Diretora Comercial</p>  
                    <p className="equipe__post">Formada em Relações Internacionais, Jéssica tem a missão de tornar a Solid cada vez mais inovadora e vanguardista. Para isso, está em constante atualização a respeito de novas tecnologias e tendências, criando modelos replicáveis do negócio.</p>
                </div>
            </li>
        </ul>
        <button className="header__button blog__button">Saiba mais</button>
    </section>

export default Equipe;