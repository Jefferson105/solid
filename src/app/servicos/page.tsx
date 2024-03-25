import GrowUp from '@/components/grow-up';

import styles from '@/styles/about.module.css';
import shared from '@/styles/shared.module.css';

import { request } from '@/services/api';
import { prefixApi } from '@/constants';

export async function generateMetadata() {
    const { data } = await request({
        path: 'pagina-servico',
        populate: 'Metadata'
    });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

const Servicos = async () => {
    const { data } = await request({
        path: 'pagina-servico',
        populate: 'Imagem'
    });

    const { Titulo, Imagem } = data?.attributes || {};

    return (
        <main className={shared.container}>
            <header
                style={{
                    backgroundImage: `url(${prefixApi + Imagem?.data?.attributes?.url})`
                }}
                className={styles.header}
            >
                <h2 className={styles.title}>{Titulo}</h2>
            </header>
            <GrowUp />
        </main>
    );
};

export default Servicos;
