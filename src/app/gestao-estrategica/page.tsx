import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('planejamentoestrategicos');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const Estrategica = async () => {
    const { frase_principal, frase_secundaria, imagem } = (
        await request('planejamentoestrategicos')
    )[0];

    return (
        <ServicePage
            image={String(imagem?.url)}
            title={frase_principal}
            text={frase_secundaria}
            figImg="/static/img/consultoria.jpg"
            icon="/static/img/setting-gears.svg"
            desc="A Solid não é o tipo de consultoria que entrega um relatório com recomendações e sugestões de melhorias. Nós somos hand on, transformamos seu negócio junto com você."
            textMini="Com esse modelo de serviço, a Solid está preparada para realizar projetos de transformação empresarial em cenários de estruturação organizacional, profissionalização para empresas familiares, incluindo fusões e separações. Para isso, trabalhamos nos em diversas frentes, entendendo a complexidade de cada negócio, a fim de alcançar os objetivos e metas traçados."
            remove={['strategy']}
        />
    );
};

export default Estrategica;
