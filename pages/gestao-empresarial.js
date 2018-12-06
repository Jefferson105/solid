import { connect } from "react-redux";
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
                <HeaderMini url="/static/img/header-empresarial.jpg">
                    <HeaderTitle color="#FFF">Software de <b>Gestão Empresarial</b></HeaderTitle>      
                    <ButtonHeader><IconHeader src="/static/img/desktop-monitor.svg" /></ButtonHeader>
                </HeaderMini>
               
                <section>
                    <TxtBold>Para ajudar as empresas a ter controle do negócio, acompanhando a produtividade da equipe e a lucratividade de cada área, desenvolvemos um software de gestão empresarial sob medida para cada cliente.</TxtBold>

                    <WrapperImg100 url="/static/img/empresarial-photo.jpg" />

                    <TxtMini>Com esse modelo de serviço, a Solid está preparada para realizar projetos de transformação empresarial em cenários de estruturação organizacional, incluindo fusão e separação. Para isso, trabalhamos nos níveis hierárquicos, tipo de subordinação e aumento da eficiência dos reportes matriciais. O outro foco é na reorganização economômica de empresas.</TxtMini>
                    
                    <GreenButton>Fale com nossos consultores</GreenButton>
                </section>
                <Crescer remove={["empresarial"]} title="Fazemos ainda mais pelo seu negócio" />
                <Clientes />
            </section>
        )
    }
}                
    
export default connect(state => state)(Home);