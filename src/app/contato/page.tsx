import Image from 'next/image';

import GrowUp from '@/components/grow-up';
import Form from '@/components/contato/form';

import styles from '@/styles/contato.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({
        path: 'contato',
        populate: 'Metadata'
    });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}
const Contato = async () => {
    const [contato, info] = await Promise.all([
        request({
            path: 'contato',
            populate: 'Imagem'
        }),
        request({
            path: 'info',
            populate: 'Numeros'
        })
    ]);

    const { Titulo, Imagem, Map } = contato?.data?.attributes || {};
    const { Email, Numeros } = info?.data?.attributes || {};

    return (
        <main className={shared.container}>
            <header
                className={shared.header}
                style={{
                    backgroundImage: `url(${prefixApi + Imagem?.data?.attributes?.url})`
                }}
            >
                <h2 className={shared.titleLarge}>{Titulo}</h2>
            </header>

            <section className={styles.section}>
                <Form />
                <div className={styles.content}>
                    <h3 className={styles.subTitle}>
                        Caso prefira, envie um e-mail ou ligue para nós.
                    </h3>
                    <p className={styles.text}>
                        Nosso time de especialistas está preparado para te
                        ajudar!
                    </p>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p>{Email}</p>
                        <div className={styles.icon}>
                            <Image
                                width={32}
                                height={32}
                                alt="Ícone"
                                src="/static/img/envelope.svg"
                            />
                        </div>
                    </li>
                    {Numeros.map((item: any, i: number) => (
                        <li key={i} className={styles.item}>
                            <p>{item.Numero}</p>
                            <div className={styles.icon}>
                                <Image
                                    width={32}
                                    height={32}
                                    alt="Ícone"
                                    src="/static/img/telephone.svg"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <GrowUp />
            <div className={styles.map}>
                <address className={styles.box}>
                    <p>
                        <b>Endereço</b>
                    </p>
                    <p>
                        R. Jurubatuba, 1350
                        <br />
                        SL. 625 - Centro
                    </p>
                    <p>
                        CEP 09725-000
                        <br />
                        São Bernardo do Campo - SP
                        <br />
                        Brasil
                    </p>
                </address>
                <iframe
                    width="425"
                    height="440"
                    src={Map}
                    style={{
                        width: '100%',
                        height: '400px',
                        border: 'none'
                    }}
                />
            </div>
        </main>
    );
};

export default Contato;
