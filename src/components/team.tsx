'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useRequest from '@/hooks/request';

import styles from '@/styles/team.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { multiCssClass } from '@/utils';

const Team = () => {
    const router = useRouter();

    const { data } = useRequest({ name: 'equipes', populate: 'Foto' });

    return (
        <section className={styles.container}>
            <h3 className={shared.title}>
                Nossa<b> Equipe</b>
            </h3>
            <ul className={styles.list}>
                {data?.map((p: any, i: number) => (
                    <li key={i} className={styles.item}>
                        <figure>
                            <Image
                                width={256}
                                height={256}
                                alt={`Foto ${p.Nome}`}
                                style={{ borderRadius: '50%' }}
                                src={
                                    prefixApi +
                                    p.attributes.Foto.data.attributes.url
                                }
                            />
                        </figure>
                        <div>
                            <h4 className={styles.name}>{p.attributes.Nome}</h4>
                            <p className={styles.cargo}>{p.attributes.Cargo}</p>
                            <p className={styles.desc}>{p.attributes.Texto}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => router.push('/sobre')}
                className={multiCssClass(shared.button, shared.link)}
            >
                Saiba mais
            </button>
        </section>
    );
};

export default Team;
