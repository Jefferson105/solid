'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styles from '@/styles/grow.module.css';
import shared from '@/styles/shared.module.css';

import { growList } from '@/data';

interface IProps {
    remove?: string[];
    title?: string;
}

const GrowUp = ({
    remove = [],
    title = 'Como ajudamos seu negócio a crescer'
}: IProps) => {
    const router = useRouter();

    return (
        <section className={styles.container}>
            <h3 className={shared.title}>{title}</h3>
            <ul className={styles.list}>
                {growList
                    .filter((item) => remove.indexOf(item.slug) === -1)
                    .map((item, i) => (
                        <li
                            key={i}
                            onClick={() => router.push(item.path)}
                            className={styles.item}
                        >
                            <figure className={styles.icon}>
                                <Image
                                    width={64}
                                    height={64}
                                    alt="Ícone crescimento"
                                    src={item.image}
                                />
                            </figure>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.text}>{item.text}</p>
                            <a className={styles.more}>Saiba mais</a>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default GrowUp;
