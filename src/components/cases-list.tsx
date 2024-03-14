'use client';

import Image from 'next/image';

import useRequest from '@/hooks/request';

import styles from '@/styles/cases.module.css';

import { prefixApi } from '@/constants';

const CasesList = () => {
    const { data } = useRequest({ name: 'casesclientes' });

    if (data?.lenght) return;

    return (
        <ul className={styles.list}>
            {data.map((item: any, i: number) => (
                <li className={styles.item} key={i}>
                    <figure
                        className={styles.figure}
                        style={{
                            backgroundImage: `url(${prefixApi}/${item.url})`
                        }}
                    />
                    <div className={styles.info}>
                        <Image
                            width={50}
                            height={50}
                            src={prefixApi + '/' + item.logo.url}
                            alt="Logo Cliente"
                        />
                        <p className={styles.text}>{item.texto}</p>
                        <a target="_blank" href={item.link}>
                            Download Case
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CasesList;
