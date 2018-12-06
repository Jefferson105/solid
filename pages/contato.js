import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import styled from "styled-components";

import { HeaderMini, HeaderTitle, TxtMini } from "../components/styles";

import HeaderMedium from "../components/styles/elements/HeaderMedium";

const ContainerEmail = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: 5rem;
    text-align: center;
`;

const TitleEmail = styled.h3`
    color: #223952;
    font-size: 2.5rem;
    font-weight: lighter;
    margin-bottom: 1rem;
`;

const TextEmail = styled.p`
    font-size: 1.5rem;
    color: #333;
`;

const EmailInfo = styled.div`
    display: flex;
`;

const InfoBox = styled.div`
    width: 50%;
    display: flex;
    height: 12rem;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${props => props.bgColor};
    color: #FFF;
    font-weight: bold;
`;

const IconInfo = styled.span`
    position: absolute;
    height: 3.5rem;
    width: 3.5rem;
    top: -1.75rem;
    left: calc(50% - 1.75rem);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    border-radius: 50%;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 2rem;
    }
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="container contato container__sobre">
                <NavMenu isFixed={true} />
                <HeaderMedium url="/static/img/quem-somos-header.jpg">
                    <HeaderTitle top={true}>Receba o contato de um <b>consultor especializado ainda hoje!</b></HeaderTitle>      
                </HeaderMedium>
                <section style={{ backgroundColor: "#F9F9F9" }}>
                    <div className="contato__formcontent">
                        <form className="contato__form">
                            <input type="name" className="contato__input" placeholder="Seu nome"/>
                            <input type="name" className="contato__input" placeholder="Empresa"/>
                            <input type="name" className="contato__input2" placeholder="Seu e-mail"/>
                            <input type="name" className="contato__input2" placeholder="Departamento desejado"/>
                            <input type="name" className="contato__msg" placeholder="Mensagem"/>
                            <button style={{ marginTop: "2rem" }} className="header__button blog__button enviarform">Enviar</button>
                        </form>
                    </div>
                    <ContainerEmail>
                        <TitleEmail>Caso prefira, envie um e-mail ou ligue para nós.</TitleEmail>
                        <TextEmail>Nosso time de especialistas está preparado para te ajudar!</TextEmail>
                    </ContainerEmail>    
                    <EmailInfo>
                        <InfoBox bgColor="#051526">
                            <p style={{ fontSize: "1.8rem" }}>contato@solidsolucoes.com.br</p>
                            <IconInfo><img src="/static/img/envelope.svg" /></IconInfo>
                        </InfoBox>
                        <InfoBox bgColor="#1b4e85">
                            <p style={{ fontSize: "2.3rem" }}>11 4330-2784</p>
                            <IconInfo><img src="/static/img/telephone.svg" /></IconInfo>
                        </InfoBox>
                    </EmailInfo>
                </section>
                <Crescer />
             </section>

      
      )
    }
}                
 
export default connect(state => state)(Home);
        