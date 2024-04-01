'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useRequest from '@/hooks/request';

import styles from '@/styles/blog-home.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { getPartText, multiCssClass, slugLinkTitle } from '@/utils';

const BlogHome = () => {
    const router = useRouter();

    const { data } = useRequest({
        name: 'blogs',
        populate: 'Imagem,Autor,Categoria',
        sort: 'createdAt:desc',
        limit: 3
    });

    return (
        <section className={styles.container}>
            <h2 className={shared.title}>
                Artigos do <b> Blog SOLID</b>
            </h2>
            <ul className={styles.list}>
                {!!data?.length &&
                    data.slice(0, 3).map((p: any, i: number) => (
                        <li
                            key={i}
                            onClick={() =>
                                router.push(
                                    `/blog/artigo/${slugLinkTitle(p?.attributes?.Titulo)}-${p?.id}`
                                )
                            }
                            style={{
                                backgroundImage: `url(${prefixApi + p?.attributes?.Imagem?.data?.attributes?.url})`
                            }}
                            className={styles.item}
                        >
                            <div>
                                <h3 className={styles.title}>
                                    <b>{p?.attributes?.Titulo}</b>
                                </h3>
                                <p>{getPartText(p?.attributes?.Texto)}...</p>
                                <p>
                                    <Image
                                        width={16}
                                        height={16}
                                        alt="Ícone calendário"
                                        src="/static/img/calendar.svg"
                                    />{' '}
                                    {p?.attributes?.createdAt.split('T')[0]}
                                </p>
                            </div>
                        </li>
                    ))}
            </ul>
            <button
                className={multiCssClass(shared.button, shared.link)}
                onClick={() => router.push('/blog')}
            >
                Conheça nosso blog
            </button>
        </section>
    );
};

export default BlogHome;
