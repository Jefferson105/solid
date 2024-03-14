import Markdown from 'react-markdown';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Metadata } from 'next';

import BlogAside from '@/components/blog/aside';

import styles from '@/styles/blog.module.css';
import shared from '@/styles/shared.module.css';

import { request } from '@/services/api';
import { prefixApi } from '@/constants';

export async function generateMetadata(): Promise<Metadata> {
    const headersList = headers();

    const url = headersList.get('next-url');
    const id = url?.split('-')[1];

    const data = await request(`posts/${id}`);

    return {
        title: data?.titulo,
        description: data?.descricao,
        openGraph: {
            siteName: 'Solid Soluções',
            description: data.conteudo.slice(0, 200) + '...',
            images: [`${prefixApi}/${data?.imagem_principal?.url}`]
        }
    };
}

const Article = async () => {
    const headersList = headers();

    const url = headersList.get('next-url');
    const id = url?.split('-')[1];

    const data = await request(`posts/${id}`);

    return (
        <main className={shared.container}>
            <header
                className={shared.header}
                style={{
                    backgroundImage: `url(${data?.error || !data ? '/static/img/header-pessoas.jpg' : `${prefixApi}/${data?.imagem_principal?.url}`})`,
                    backgroundBlendMode: 'overlay'
                }}
            >
                {!!data?.categoria?.nome && (
                    <p className={styles.category}>{data?.categoria?.nome}</p>
                )}
                {!!data?.titulo && (
                    <h2 className={styles.title}>{data?.titulo}</h2>
                )}
            </header>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    {!data?.error ? (
                        <>
                            <h3 className={styles.titleArticle}>
                                {data?.titulo}
                            </h3>
                            <Markdown>{data?.conteudo}</Markdown>{' '}
                        </>
                    ) : (
                        <Link href="/blog" className={styles.notFound}>
                            Artigo não encontrado
                            <span> ver outros</span>
                        </Link>
                    )}
                </nav>
                <BlogAside />
            </section>
        </main>
    );
};

export default Article;
