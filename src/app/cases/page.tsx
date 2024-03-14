import GrowUp from '@/components/grow-up';
import ScrollBtn from '@/components/scroll-btn';
import CasesList from '@/components/cases-list';

import styles from '@/styles/service.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('cases');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const Cases = async () => {
    const { frase_principal, imagem } = (await request('cases'))[0];

    return (
        <main className={shared.container}>
            <header
                className={styles.header}
                style={{
                    backgroundImage: `url(${prefixApi + '/' + imagem?.url})`
                }}
            >
                <h2 className={styles.title}>{frase_principal}</h2>
                <ScrollBtn distance={400} />
            </header>

            <section>
                <CasesList />
            </section>
            <GrowUp />
        </main>
    );
};

export default Cases;
