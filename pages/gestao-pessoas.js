import { connect } from "react-redux";
import Router from 'next/router';
import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import Clientes from "../components/Clientes";

import { HeaderMini, HeaderTitle, ButtonHeader, TxtBold, TxtMini, GreenButton, IconHeader, WrapperImg100 } from "../components/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container container__sobre">
                <NavMenu isFixed={true} />
                <HeaderMini url="/static/img/header-pessoas.jpg">
                    <HeaderTitle color="#FFF">Desenvolvimento de <b>Pessoas</b></HeaderTitle>      
                    <ButtonHeader><IconHeader src="/static/img/multiple-users.svg" /></ButtonHeader>
                </HeaderMini>
               
                <section>
                    <TxtBold>O grande desafio das lideranças com pessoas, em qualquer ambiente, é gerar um senso de pertencimento a todos, de modo que se construa um time verdadeiramente engajado em alcançar metas. Portanto, é necessária uma atuação constante em agregar, alocar, recompensar, desenvolver, manter e monitorar as pessoas com a melhor metodologia de gestão possível.
                    </TxtBold>

                    <WrapperImg100 url="/static/img/pessoas-photo.jpg" />

                    <TxtMini>Nosso modelo de desenvolvimento, ajuda os líderes a gerirem de forma efetiva e prática, sem jamais delegar suas responsabilidades ao “RH”, aprendendo a dar feedbacks de maneira correta, delegar tarefas, comunicar-se com assertividade, melhorar o relacionamento com a equipe, saber como lidar com momentos de crises e tomar decisões importantes, além de adquirir técnicas para otimização do próprio tempo e da equipe e, criar estratégias para que o negócio possa crescer financeiramente, com a participação ativa de todos.
                    </TxtMini>
                    
                    <GreenButton onClick={() => Router.push({ pathname: '/contato', query: { consultor: true }})}>Fale com nossos consultores</GreenButton>
                </section>
                <Crescer remove={["pessoas"]} title="Fazemos ainda mais pelo seu negócio" />
                <Clientes />
            </section>
        )
    }
}                
    
export default connect(state => state)(Home);