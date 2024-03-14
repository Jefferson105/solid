import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('gestaoempresarials');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const Empresarial = async () => {
    const { frase_principal, frase_secundaria, imagem } = (
        await request('gestaoempresarials')
    )[0];

    return (
        <ServicePage
            image={String(imagem?.url)}
            title={frase_principal}
            text={frase_secundaria}
            figImg="/static/img/empresarial-photo.jpg"
            icon="/static/img/desktop-monitor.svg"
            textMini="Por meio desse sistema, o gestor passa a ter acesso a um dashboard, onde tem a possibilidade de acompanhar a evolução dos resultados em tempo real e de qualquer lugar."
            remove={['enterprise']}
        />
    );
};

export default Empresarial;
