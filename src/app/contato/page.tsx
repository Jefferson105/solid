import Image from 'next/image';

import GrowUp from '@/components/grow-up';
import Form from '@/components/contato/form';

import styles from '@/styles/contato.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';
import { contactList } from '@/data';

export async function generateMetadata() {
    const data = await request('contatoes');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const Contato = async () => {
    const { frase_principal, imagem } = (await request('contatoes'))[0];

    return (
        <main className={shared.container}>
            <header
                className={shared.header}
                style={{
                    backgroundImage: `url(${prefixApi + '/' + imagem?.url})`
                }}
            >
                <h2 className={shared.titleLarge}>{frase_principal}</h2>
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
                    {contactList.map((item, i) => (
                        <li key={i} className={styles.item}>
                            <p>{item.text}</p>
                            <div className={styles.icon}>
                                <Image
                                    width={32}
                                    height={32}
                                    alt="Ícone"
                                    src={item.image}
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
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=-46.55851,-23.70819,-46.54846,-23.71104&amp;layer=mapnik`}
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
