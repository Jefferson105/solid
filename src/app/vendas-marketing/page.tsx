import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({
        path: 'vendas-marketing',
        populate: 'Metadata'
    });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

const VendaMarketing = async () => {
    const { data } = await request({
        path: 'vendas-marketing',
        populate: 'Header,Header.Imagem,Header.Icon,Lista,Lista.Imagem'
    });

    const { Header, Lista } = data?.attributes || {};

    return (
        <ServicePage
            image={Header?.Imagem?.data?.attributes?.url}
            title={Header?.Titulo}
            text={Header?.Texto}
            icon={Header?.Icon?.data?.attributes?.url}
            list={Lista}
            remove={['/vendas-marketing']}
        />
    );
};

export default VendaMarketing;
