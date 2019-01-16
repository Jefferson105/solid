import { connect } from "react-redux";
import Head from 'next/head';

import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import styled from "styled-components";

import { HeaderMini, HeaderTitle, ButtonHeader, IconHeader } from "../components/styles";

import { request } from '../utils/request';

const ListClients = styled.ul`
    list-style: none;
    max-width: 1000px;
    margin: 5rem auto;
`;

const ListItem = styled.li`
    display: flex;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
    border-radius: 10px;
    margin-bottom: 3rem;
    @media (max-width: 1009px){
        flex-direction: column;
    }
`;

const FigItem = styled.figure`
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    width: 30%;
    clip-path: ${props => props.right ? "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)" };
    @media (max-width: 1009px){
        width: 100%;
        height: 10rem;
        clip-path: none;
    }
`;

const ClienteInfo = styled.div`
    padding: 2rem 6rem 2rem 3rem;
    width: 70%;
    box-sizing: border-box;
    @media (max-width: 1009px){
        width: 100%;
        padding: 1rem;
    }
`;

const LogoCliente = styled.img`
    height: 4rem;
`;

const ClienteTxt = styled.p`
    color: #1B4E85;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ClientButton = styled.a`
    background-color: #1B4E85;
    color: #FFF;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 25px;
    padding: .5rem 1.5rem;
    margin-top: 1rem;
    text-decoration: none;
`;

class Home extends React.Component {
    static async getInitialProps() {
        let data = await request('cases');

        data = data[0];

        return data;
    }

    render() {
        const { prefix, titulo, descricao, frase_principal, imagem } = this.props;

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
                        <ButtonHeader mini={true}><IconHeader mini={true} src="/static/img/expand-button.svg" /></ButtonHeader>
                    </HeaderMini>

                    <section>
                        <ListClients>
                            <ListItem>
                                <FigItem url="/static/img/cliente1.jpg" />
                                <ClienteInfo>
                                    <LogoCliente src="/static/img/abclogo.jpg" />
                                    <ClienteTxt>Veja como a Solid ajudou a ABC Cargas a sair do prejuízo para o lucro de R$ 6 milhões, em 1 ano</ClienteTxt>
                                    <ClientButton target="_blank" href="https://mailchi.mp/d6b22e18739f/case-lucro-abc-cargas">Download Case</ClientButton>
                                </ClienteInfo>
                            </ListItem>
                        </ListClients>
                    </section>
                    <Crescer />
                </section>
            </React.Fragment>
        )
    }
}                
    
export default connect(state => state)(Home);