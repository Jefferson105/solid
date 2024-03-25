import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({
        path: 'planejamento',
        populate: 'Metadata'
    });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

const Estrategica = async () => {
    const { data } = await request({
        path: 'planejamento',
        populate: 'Header,Header.Imagem,Header.Icon,Conteudo,Conteudo.Imagem'
    });

    const { Header, Conteudo } = data?.attributes || {};

    return (
        <ServicePage
            image={Header?.Imagem?.data?.attributes?.url}
            title={Header?.Titulo}
            text={Header?.Texto}
            figImg={Conteudo?.Imagem?.data?.attributes?.url}
            icon={Header?.Icon?.data?.attributes?.url}
            desc={Conteudo?.TextoImagem || null}
            textMini={Conteudo?.Texto}
            remove={['/gestao-estrategica']}
        />
    );
};

export default Estrategica;
