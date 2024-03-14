'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useRequest from '@/hooks/request';

import styles from '@/styles/blog-home.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';
import { multiCssClass } from '@/utils';

const BlogHome = () => {
    const router = useRouter();

    const { data } = useRequest({ name: 'posts' });

    return (
        <section className={styles.container}>
            <h2 className={shared.title}>
                Artigos do <b> Blog SOLID</b>
            </h2>
            <ul className={styles.list}>
                {!!data?.length &&
                    data
                        ?.slice(-3)
                        ?.reverse()
                        .map((p: any, i: number) => (
                            <li
                                key={i}
                                onClick={() => router.push(`/blog/${p.id}`)}
                                style={{
                                    backgroundImage: `url(${prefixApi + p.imagem_principal.url})`
                                }}
                                className={styles.item}
                            >
                                <div>
                                    <h3 className={styles.title}>
                                        <b>{p.titulo}</b>
                                    </h3>
                                    <p>
                                        <Image
                                            width={16}
                                            height={16}
                                            alt="Ícone calendário"
                                            src="/static/img/calendar.svg"
                                        />{' '}
                                        {p.createdAt.split('T')[0]}
                                    </p>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: `${p.conteudo.slice(0, 100)}...`
                                        }}
                                    />
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
