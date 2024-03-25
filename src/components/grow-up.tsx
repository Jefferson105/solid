'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import useRequest from '@/hooks/request';

import styles from '@/styles/grow.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';

interface IProps {
    remove?: Array<
        | '/gestao-empresarial'
        | '/vendas-marketing'
        | '/gestao-estrategica'
        | '/gestao-pessoas'
    >;
    title?: string;
}

const GrowUp = ({
    remove = [],
    title = 'Como ajudamos seu negócio a crescer'
}: IProps) => {
    const router = useRouter();

    const { data } = useRequest({
        name: 'Servicos',
        populate: 'Icon'
    });

    return (
        <section className={styles.container}>
            <h3 className={shared.title}>{title}</h3>
            <ul className={styles.list}>
                {data
                    .filter(
                        ({ attributes }: any) =>
                            remove.indexOf(attributes.Link) === -1
                    )
                    .map(({ attributes }: any, i: number) => (
                        <li
                            key={i}
                            onClick={() => router.push(attributes.Link)}
                            className={styles.item}
                        >
                            <figure className={styles.icon}>
                                <Image
                                    width={64}
                                    height={64}
                                    alt={`Ícone ${attributes.Nome}`}
                                    src={
                                        prefixApi +
                                        attributes?.Icon?.data?.attributes?.url
                                    }
                                />
                            </figure>
                            <h3 className={styles.title}>{attributes.Nome}</h3>
                            <p className={styles.text}>{attributes.Texto}</p>
                            <a className={styles.more}>Saiba mais</a>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default GrowUp;
