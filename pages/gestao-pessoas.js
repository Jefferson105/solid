import { connect } from "react-redux";
import Router from 'next/router';
import Head from 'next/head';

import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import Clientes from "../components/Clientes";

import { HeaderMini, HeaderTitle, ButtonHeader, TxtBold, TxtMini, GreenButton, IconHeader, WrapperImg100 } from "../components/styles";

import { request } from '../utils/request';

class Home extends React.Component {
    static async getInitialProps() {
        let data = await request('desenvolvimentopessoas');

        data = data[0];

        return data;
    }

    render() {
        const { prefix, titulo, descricao, frase_principal, frase_secundaria, imagem } = this.props;

        return(
            <React.Fragment>
                <Head>
                    <title>{titulo}</title>
                    <meta content={descricao} name="description" />
                </Head>
                <section className="container container__sobre">
                    <NavMenu isFixed={true} />
                    <HeaderMini url={prefix + imagem.url}>
                        <HeaderTitle color="#FFF">{frase_principal}</HeaderTitle>      
                        <ButtonHeader><IconHeader src="/static/img/multiple-users.svg" /></ButtonHeader>
                    </HeaderMini>
                
                    <section>
                        <TxtBold>{frase_secundaria}</TxtBold>

                        <WrapperImg100 url="/static/img/pessoas-photo.jpg" />

                        <TxtMini>Nosso modelo de desenvolvimento, ajuda os líderes a gerirem de forma efetiva e prática, sem jamais delegar suas responsabilidades ao “RH”, aprendendo a dar feedbacks de maneira correta, delegar tarefas, comunicar-se com assertividade, melhorar o relacionamento com a equipe, saber como lidar com momentos de crises e tomar decisões importantes, além de adquirir técnicas para otimização do próprio tempo e da equipe e, criar estratégias para que o negócio possa crescer financeiramente, com a participação ativa de todos.
                        </TxtMini>
                        
                        <GreenButton onClick={() => Router.push({ pathname: '/contato', query: { consultor: true }})}>Fale com nossos consultores</GreenButton>
                    </section>
                    <Crescer remove={["pessoas"]} title="Fazemos ainda mais pelo seu negócio" />
                    <Clientes />
                </section>
            </React.Fragment>
        )
    }
}                
    
export default connect(state => state)(Home);