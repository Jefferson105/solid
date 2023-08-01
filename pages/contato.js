import { connect } from 'react-redux';
import Head from 'next/head';

import NavMenu from '../components/NavMenu';
import Crescer from '../components/Crescer';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import { enviarEmailContato } from '../actions';

import { HeaderTitle } from '../components/styles';

import HeaderMedium from '../components/styles/elements/HeaderMedium';
import Error from '../components/styles/elements/Error';
import Modal from '../components/modalEmail';
import Box from '../components/styles/blocks/box-map';

import { request } from '../utils/request';

const ContainerEmail = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: 5rem;
    text-align: center;
    @media (max-width: 1009px) {
        width: 100%;
    }
`;

const TitleEmail = styled.h3`
    color: #223952;
    font-size: 2.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
    @media (max-width: 1009px) {
        font-size: 2rem;
    }
`;

const TextEmail = styled.p`
    font-size: 1.5rem;
    color: #333;
`;

const EmailInfo = styled.div`
    display: flex;
    @media (max-width: 1009px) {
        flex-direction: column;
    }
`;

const InfoBox = styled.div`
    width: 50%;
    display: flex;
    height: 12rem;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.bgColor};
    color: #fff;
    font-weight: bold;
    @media (max-width: 1009px) {
        width: 100%;
        height: 7rem;
    }
`;

const IconInfo = styled.span`
    position: absolute;
    height: 3.5rem;
    width: 3.5rem;
    top: -1.75rem;
    left: calc(50% - 1.75rem);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 2rem;
    }
`;

class Home extends React.Component {
    static async getInitialProps() {
        let data = await request('contatoes');

        data = data[0];

        return data;
    }

    state = {
        nome: '',
        empresa: '',
        email: '',
        departamento: '',
        mensagem: '',
        error: null
    };

    checkFields = (e) => {
        e.preventDefault();

        this.setState({ error: null });

        if (
            Object.keys(this.state).every((k) =>
                k == 'error' ? true : this.state[k]
            )
        ) {
            this.props.dispatch(enviarEmailContato(this.state));
        } else {
            this.setState({ error: 'Preencha todos os campos.' });
        }
    };

    render() {
        const {
            prefix,
            titulo,
            descricao,
            frase_principal,
            imagem,
            emailContato
        } = this.props;
        const { error } = this.state;

        return (
            <React.Fragment>
                <Head>
                    <title>{titulo}</title>
                    <meta content={descricao} name="description" />
                </Head>
                <section className="container contato container__sobre">
                    <NavMenu isFixed={true} />
                    <HeaderMedium noOverlay={true} url={prefix + imagem.url}>
                        <HeaderTitle top={true}>{frase_principal}</HeaderTitle>
                    </HeaderMedium>
                    <section style={{ backgroundColor: '#F9F9F9' }}>
                        <div className="contato__formcontent">
                            <form
                                onSubmit={this.checkFields}
                                className="contato__form"
                            >
                                <input
                                    onChange={(e) =>
                                        this.setState({ nome: e.target.value })
                                    }
                                    type="text"
                                    className="contato__input"
                                    placeholder="Seu nome"
                                />
                                <input
                                    onChange={(e) =>
                                        this.setState({
                                            empresa: e.target.value
                                        })
                                    }
                                    type="text"
                                    className="contato__input"
                                    placeholder="Empresa"
                                />
                                <input
                                    onChange={(e) =>
                                        this.setState({ email: e.target.value })
                                    }
                                    type="text"
                                    className="contato__input2"
                                    placeholder="Seu e-mail"
                                />
                                <input
                                    onChange={(e) =>
                                        this.setState({
                                            departamento: e.target.value
                                        })
                                    }
                                    type="text"
                                    className="contato__input2"
                                    placeholder="Departamento desejado"
                                />
                                <input
                                    onChange={(e) =>
                                        this.setState({
                                            mensagem: e.target.value
                                        })
                                    }
                                    type="text"
                                    className="contato__msg"
                                    placeholder="Mensagem"
                                />
                                <button
                                    style={{ marginTop: '2rem' }}
                                    className="header__button blog__button enviarform"
                                >
                                    Enviar
                                </button>
                            </form>
                            {!!error && <Error>{error}</Error>}
                        </div>
                        <ContainerEmail>
                            <TitleEmail>
                                Caso prefira, envie um e-mail ou ligue para nós.
                            </TitleEmail>
                            <TextEmail>
                                Nosso time de especialistas está preparado para
                                te ajudar!
                            </TextEmail>
                        </ContainerEmail>
                        <EmailInfo>
                            <InfoBox bgColor="#051526">
                                <p style={{ fontSize: '1rem' }}>
                                    contato@solidsolucoes.com.br
                                </p>
                                <IconInfo>
                                    <img src="/static/img/envelope.svg" />
                                </IconInfo>
                            </InfoBox>
                            <InfoBox bgColor="#1b4e85">
                                <p style={{ fontSize: '1.3rem' }}>
                                    (11) 941578881
                                </p>
                                <IconInfo>
                                    <img src="/static/img/telephone.svg" />
                                </IconInfo>
                            </InfoBox>
                            <InfoBox bgColor="#051526">
                                <p style={{ fontSize: '1.3rem' }}>
                                    (11) 41038163
                                </p>
                                <IconInfo>
                                    <img src="/static/img/telephone.svg" />
                                </IconInfo>
                            </InfoBox>
                        </EmailInfo>
                    </section>
                    <Crescer />
                    <div style={{ position: 'relative' }}>
                        <Box>
                            <Box.Text>
                                <b>Endereço:</b>
                            </Box.Text>
                            <Box.Text>
                                R. Jurubatuba, 1350
                                <br />
                                SL. 625 - Centro
                            </Box.Text>
                            <Box.Text>
                                CEP 09725-000
                                <br />
                                São Bernardo do Campo - SP
                                <br />
                                Brasil
                            </Box.Text>
                        </Box>
                        <iframe
                            src="https://snazzymaps.com/embed/119420"
                            width="100%"
                            height="440px"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                    {!!emailContato.show && <Modal />}
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(connect((state) => state)(Home));
