import { connect } from "react-redux";
import Router from 'next/router';
import Head from 'next/head';

import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import Clientes from "../components/Clientes";

import { HeaderMini, HeaderTitle, ButtonHeader, Txt50, TxtBold, TxtMini, GreenButton, IconHeader, WrapperTxtImg, Img50 } from "../components/styles";

import { request } from '../utils/request';

class Home extends React.Component {
    static async getInitialProps() {
        let data = await request('planejamentoestrategicos');

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
                        <ButtonHeader><IconHeader src="/static/img/setting-gears.svg" /></ButtonHeader>
                    </HeaderMini>
                
                    <section>
                        <TxtBold>{frase_secundaria}</TxtBold>

                        <WrapperTxtImg>
                            <Img50 url="/static/img/consultoria.jpg" />
                            <Txt50>A Solid não é o tipo de consultoria que entrega um relatório com recomendações e sugestões de melhorias. Nós somos hand on, transformamos seu negócio junto com você.</Txt50>
                        </WrapperTxtImg>

                        <TxtMini>Com esse modelo de serviço, a Solid está preparada para realizar projetos de transformação empresarial em cenários de estruturação organizacional, profissionalização para empresas familiares, incluindo fusões e separações. Para isso, trabalhamos nos em diversas frentes, entendendo a complexidade de cada negócio, a fim de alcançar os objetivos e metas traçados.</TxtMini>
                        
                        <GreenButton onClick={() => Router.push({ pathname: '/contato', query: { consultor: true }})}>Fale com nossos consultores</GreenButton>
                    </section>
                    <Crescer remove={["estrategica"]} title="Fazemos ainda mais pelo seu negócio" />
                    <Clientes />
                </section>
            </React.Fragment>
        )
    }
}                

    
export default connect(state => state)(Home);

//Planejamento <b>Estratégico</b>
//Para crescer, muitas vezes é preciso reestruturar o negócio. O apoio de uma consultoria de gestão é fundamental para ajudar nessa etapa, pois além de contar com o trabalho de especialistas, é importante ter uma visão externa e isenta da situação.