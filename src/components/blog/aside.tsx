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
            {data?.map(({ attributes }: any, i: number) => (
                <Link
                    href={`/blog/categoria/${slugLinkTitle(attributes.Nome)}`}
                    key={i}
                >
                    {attributes.Nome}
                </Link>
            ))}
        </aside>
    );
};

export default BlogAside;
