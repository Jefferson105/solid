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
                <HeaderMini url="/static/img/header-pessoas.jpg">
                    <HeaderTitle color="#FFF">Consultoria em <b>Gestão de Pessoas</b></HeaderTitle>      
                    <ButtonHeader><IconHeader src="/static/img/multiple-users.svg" /></ButtonHeader>
                </HeaderMini>
               
                <section>
                    <TxtBold>Quando falamos de Consultoria em Gestão de Pessoas logo assoiamos ao desenvolvimento e capacitação do capital humano. Porém, treinar líderes e donos também é uma etapa fundamental para o crescimento e transformação do negócio.</TxtBold>

                    <WrapperImg100 url="/static/img/pessoas-photo.jpg" />

                    <TxtMini>Com esse modelo de serviço, a Solid está preparada para realizar projetos de transformação empresarial em cenários de estruturação organizacional, incluindo fusão e separação. Para isso, trabalhamos nos níveis hierárquicos, tipo de subordinação e aumento da eficiência dos reportes matriciais. O outro foco é na reorganização economômica de empresas.</TxtMini>
                    
                    <GreenButton>Fale com nossos consultores</GreenButton>
                </section>
                <Crescer remove={["pessoas"]} title="Fazemos ainda mais pelo seu negócio" />
                <Clientes />
            </section>
        )
    }
}                
    
export default connect(state => state)(Home);