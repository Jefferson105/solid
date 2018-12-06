import { connect } from "react-redux";
import NavMenu from "../components/NavMenu";
import Crescer from "../components/Crescer";
import Clientes from "../components/Clientes";

import ListMarketing from "../components/styles/blocks/list-marketing";

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
                    <HeaderTitle color="#FFF">Vendas e <b>Marketing</b></HeaderTitle>      
                    <ButtonHeader><IconHeader src="/static/img/funnel.svg" /></ButtonHeader>
                </HeaderMini>
               
                <section>
                    <TxtBold>Temos a fórmula certa para ajudar sua empresa a construir uma estrutura de máquina de venda com o objetivo de acelerar os resultados e aumentar o número de contratos fechados. Para isso, utilizamos uma metodologia revolucionária de vendas outbound.</TxtBold>
                
                    <ListMarketing>
                        <ListMarketing.Item>
                            <ListMarketing.Image url="https://msp2l1160225102310.blob.core.windows.net/ms-p2-l1-160225-1023-13-assets/Windows_Education_Office_1920_Office365_img.jpg" />
                            <ListMarketing.Phrase><p><b>Primeiro vamos entender o seu negócio e compreender sua estrutura comercial.</b> O próximo passo é definir quem são as personas e o público alvo e, então, construiremos uma estratégia go to market, juntamente com os canais de vendas adequados e a implementação da automação no processo de vendas.</p></ListMarketing.Phrase>
                        </ListMarketing.Item>
                        <ListMarketing.Item>
                            <ListMarketing.Phrase><p>Em paralelo a isso, é preciso saber como o mercado enxerga sua empresa. <b>Seus concorrentes sabem exatamente o que você faz? E você está se comunicando de forma correta com todos os stakeholders?</b></p></ListMarketing.Phrase>
                            <ListMarketing.Image url="/static/img/img_solid7.jpg" />
                        </ListMarketing.Item>
                        <ListMarketing.Item>
                            <ListMarketing.Image url="/static/img/planning.jpg" />
                            <ListMarketing.Phrase><p>Para suprir o gap de comunicação do seu negócio, a Solid conta com uma área específica de comunicação, com foco em estratégias de Marketing. <b>Nosso propósito é construir adequadamente o posicionamento da sua marca no mercado por meio de trabalho de comunicação, visando a geração de leads.</b></p></ListMarketing.Phrase>
                        </ListMarketing.Item>
                    </ListMarketing>

                    <GreenButton>Fale com nossos consultores</GreenButton>
                </section>
                <Crescer remove={["vendas"]} title="Fazemos ainda mais pelo seu negócio" />
                <Clientes />
            </section>
        )
    }
}                
    
export default connect(state => state)(Home);