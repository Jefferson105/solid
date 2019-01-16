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
        let data = await request('gestaoempresarials');

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
                        <ButtonHeader><IconHeader src="/static/img/desktop-monitor.svg" /></ButtonHeader>
                    </HeaderMini>
                
                    <section>
                        <TxtBold>{frase_secundaria}</TxtBold>

                        <WrapperImg100 url="/static/img/empresarial-photo.jpg" />

                        <TxtMini>Por meio desse sistema, o gestor passa a ter acesso a um dashboard, onde tem a possibilidade de acompanhar a evolução dos resultados em tempo real e de qualquer lugar.</TxtMini>
                        
                        <GreenButton onClick={() => Router.push({ pathname: '/contato' })}>Fale com nossos consultores</GreenButton>
                    </section>
                    <Crescer remove={["empresarial"]} title="Fazemos ainda mais pelo seu negócio" />
                    <Clientes />
                </section>
            </React.Fragment>
        )
    }
}                


export default connect(state => state)(Home);