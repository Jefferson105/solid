import Team from '@/components/team';
import ScrollBtn from '@/components/scroll-btn';
import GrowUp from '@/components/grow-up';

import styles from '@/styles/about.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('sobres');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const Sobre = async () => {
    const { frase_principal, frase_secundaria, imagem } = (
        await request('sobres')
    )[0];

    return (
        <main className={shared.container}>
            <header
                style={{ backgroundImage: `url(${prefixApi + imagem.url})` }}
                className={styles.header}
            >
                <h2 className={styles.title}>{frase_principal}</h2>
                <ScrollBtn distance={400} />
            </header>
            <section className={styles.content}>
                <h3 className={styles.subTitle}>{frase_secundaria}</h3>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.text}>
                            <p>
                                Temos uma <strong>metodologia hands on</strong>,
                                ou seja, colocamos a mão na massa junto com
                                nossos clientes, identificando onde estão os
                                gaps, implementando planos de ação para reverter
                                o cenário, acompanhando passo a passo o que está
                                sendo feito e corrigimos a rota a qualquer
                                momento até alcançar o resultado esperado.
                            </p>
                        </div>
                        <figure
                            style={{
                                backgroundImage: 'url(/static/img/hands_on.jpg)'
                            }}
                            className={styles.figure}
                        />
                    </li>
                    <li className={styles.item}>
                        <figure
                            style={{
                                backgroundImage:
                                    'url(/static/img/presidente-total.jpeg)'
                            }}
                            className={styles.figure}
                        />
                        <div className={styles.text}>
                            <p>
                                <strong>Eduardo Bogalheira</strong>, CEO da
                                Solid, acumula mais de 30 anos de experiência no
                                mercado corporativo, ocupando cargos de
                                liderança em importantes empresas dos setores de
                                Logística, Automobilística e Indústria.
                            </p>
                            <p>
                                Além disso, a Solid conta com a equipe
                                experiente, qualificada e com amplo conhecimento
                                técnico, focada em melhorar os resultados de
                                gestão e maximizar os lucros sempre atendendo
                                aos objetivos estratégicos traçados pelos
                                clientes.
                            </p>
                            <p>
                                Usando técnicas modernas de gestão, eliminamos
                                as causas que ocasionam os problemas ao mesmo
                                tempo em que treinamos seus colaboradores.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <GrowUp />
            <Team />
        </main>
    );
};

export default Sobre;
