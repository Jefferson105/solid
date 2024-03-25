import GrowUp from '@/components/grow-up';
import ScrollBtn from '@/components/scroll-btn';

import styles from '@/styles/service.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({
        path: 'cases',
        populate: 'Metadata'
    });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

const Cases = async () => {
    const { data } = await request({
        path: 'cases',
        populate: 'Imagem'
    });

    const { Titulo, Imagem } = data?.attributes || {};

    return (
        <main className={shared.container}>
            <header
                className={styles.header}
                style={{
                    backgroundImage: `url(${prefixApi + Imagem?.data?.attributes?.url})`
                }}
            >
                <h2 className={styles.title}>{Titulo}</h2>
                <ScrollBtn distance={400} />
            </header>

            <GrowUp />
        </main>
    );
};

export default Cases;

/*
<section>
                <CasesList />
            </section>
*/
