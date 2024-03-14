'use client';

import Link from 'next/link';

import useRequest from '@/hooks/request';

import styles from '@/styles/blog.module.css';

import { slugLinkTitle } from '@/utils';

const BlogAside = () => {
    const { data } = useRequest({
        name: 'categorias'
    });

    return (
        <aside className={styles.aside}>
            <h4>Categorias</h4>
            <Link href="/blog">Todos</Link>
            {data?.map((c: any, i: number) => (
                <Link href={`/blog/categoria/${slugLinkTitle(c.nome)}`} key={i}>
                    {c.nome}
                </Link>
            ))}
        </aside>
    );
};

export default BlogAside;
