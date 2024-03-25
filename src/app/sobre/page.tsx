import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import Team from '@/components/team';
import ScrollBtn from '@/components/scroll-btn';
import GrowUp from '@/components/grow-up';

import styles from '@/styles/about.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({ path: 'sobre', populate: 'Metadata' });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

const Sobre = async () => {
    const { data } = await request({
        path: 'sobre',
        populate: 'Info,Info.Imagem,Imagem'
    });

    const { Titulo, Texto, Imagem, Info } = data?.attributes || {};

    return (
        <main className={shared.container}>
            <header
                style={{
                    backgroundImage: `url(${prefixApi + Imagem?.data?.attributes?.url})`
                }}
                className={styles.header}
            >
                <h2 className={styles.title}>{Titulo}</h2>
                <ScrollBtn distance={400} />
            </header>
            <section className={styles.content}>
                <h3 className={styles.subTitle}>{Texto}</h3>

                <ul className={styles.list}>
                    {Info.map((info: any, i: number) => (
                        <li key={i} className={styles.item}>
                            <div className={styles.text}>
                                <BlocksRenderer content={info?.Texto} />
                            </div>
                            <figure
                                style={{
                                    backgroundImage: `url(${prefixApi}${info?.Imagem?.data?.attributes?.url})`
                                }}
                                className={styles.figure}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <GrowUp />
            <Team />
        </main>
    );
};

export default Sobre;
