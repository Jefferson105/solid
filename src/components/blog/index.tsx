'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BlogAside from '@/components/blog/aside';
import useRequest from '@/hooks/request';

import styles from '@/styles/blog.module.css';
import shared from '@/styles/shared.module.css';

import { getPartText, multiCssClass, slugLinkTitle } from '@/utils';
import { prefixApi } from '@/constants';

const PER_PAGE = 5;

const Blog = () => {
    const path = usePathname();

    const [category, setCategory] = useState<any>(null);
    const [page, setPage] = useState<number>(0);
    const [articles, setArticles] = useState([]);

    const { data, loading } = useRequest({
        name: 'blogs',
        populate: 'Imagem,Autor,Autor.Foto,Categoria',
        sort: 'createdAt:desc'
    });

    const { data: categories, loading: loadingC } = useRequest({
        name: 'categorias'
    });

    useEffect(() => {
        const slug = path.split('/categoria/')[1];

        if (loading || loadingC) return;

        const catg = categories.find(
            (c: any) => slugLinkTitle(c?.attributes?.Nome) === slug
        );

        if (!catg) {
            setCategory(null);
            setArticles(data);
        } else {
            setCategory(catg.attributes);
            setArticles(
                data.filter(
                    ({ attributes }: any) =>
                        attributes?.Categoria?.data?.id === catg.id
                )
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, data, loading, loadingC, categories?.length]);

    if (loading)
        return (
            <main className={multiCssClass(shared.container, shared.loading)}>
                <Image
                    width={32}
                    height={32}
                    className={shared.rotate}
                    alt="Loading icon"
                    src="/static/img/loading.svg"
                />
                <p>Carregando</p>
            </main>
        );

    if (!data?.length)
        return (
            <main className={multiCssClass(shared.container, shared.loading)}>
                <p>Ainda sem postagens</p>
            </main>
        );

    const firstPost = data[0];

    return (
        <main className={shared.container}>
            <header
                className={shared.header}
                style={{
                    backgroundImage: 'url(/static/img/header-pessoas.jpg)'
                }}
            >
                {category ? (
                    <h2 style={{ color: '#fff' }} className={shared.titleLarge}>
                        {category?.Nome}
                    </h2>
                ) : (
                    <div className={styles.slide}>
                        <div>
                            <p className={styles.category}>
                                {
                                    firstPost?.attributes?.Categoria?.data
                                        ?.attributes?.Nome
                                }
                            </p>
                            <h2 className={styles.title}>
                                {firstPost?.attributes?.Titulo}
                            </h2>
                            <Link
                                className={styles.button}
                                href={`/blog/artigo/${slugLinkTitle(firstPost?.attributes?.Titulo)}-${firstPost?.id}`}
                            >
                                Leia mais
                            </Link>
                        </div>
                    </div>
                )}
            </header>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    {!data?.length && (
                        <h3 className={shared.titleLarge}>
                            Em breve teremos artigos aqui.
                        </h3>
                    )}
                    <ul className={styles.list}>
                        {articles
                            .slice(PER_PAGE * page, PER_PAGE * page + PER_PAGE)
                            .map(({ attributes: item, id }: any, i: number) => (
                                <li key={i} className={styles.item}>
                                    <figure
                                        className={styles.figure}
                                        style={{
                                            backgroundImage: `url(${prefixApi}${item?.Imagem?.data?.attributes?.url})`
                                        }}
                                    />
                                    <div className={styles.content}>
                                        <p className={styles.category}>
                                            {
                                                item?.Categoria?.data
                                                    ?.attributes?.Nome
                                            }
                                        </p>
                                        <h3 className={styles.titleItem}>
                                            {item?.Titulo}
                                        </h3>
                                        <div className={styles.author}>
                                            <figure
                                                className={styles.photo}
                                                style={{
                                                    backgroundImage: `url(${prefixApi}${item?.Autor?.data?.attributes?.Foto?.data?.attributes?.url})`
                                                }}
                                            />
                                            <p className={styles.name}>
                                                Por{' '}
                                                <b>
                                                    {
                                                        item?.Autor?.data
                                                            ?.attributes?.Nome
                                                    }
                                                </b>
                                            </p>
                                        </div>
                                        <div className={styles.text}>
                                            {getPartText(item?.Texto)}...
                                        </div>
                                        <Link
                                            className={styles.buttonItem}
                                            href={`/blog/artigo/${slugLinkTitle(item.Titulo)}-${id}`}
                                        >
                                            Leia mais
                                        </Link>
                                    </div>
                                </li>
                            ))}
                    </ul>
                    {data?.length > PER_PAGE && (
                        <ul className={styles.pagination}>
                            {[
                                ...Array(Math.ceil(articles.length / PER_PAGE))
                            ].map((_, i) => (
                                <li
                                    key={i}
                                    className={multiCssClass(
                                        i === page && styles.selected
                                    )}
                                    onClick={() => setPage(i)}
                                >
                                    {i + 1}
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
                <BlogAside />
            </section>
        </main>
    );
};

export default Blog;
