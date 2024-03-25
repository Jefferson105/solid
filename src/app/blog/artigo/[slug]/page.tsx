import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { Metadata } from 'next';

import BlogAside from '@/components/blog/aside';

import styles from '@/styles/blog.module.css';
import shared from '@/styles/shared.module.css';

import { request } from '@/services/api';
import { prefixApi } from '@/constants';
import { getPartText } from '@/utils';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params?.slug?.split('-')[1];

    const { data } = await request({
        path: `blogs/${id}`,
        populate: 'Imagem'
    });

    const { Titulo, Texto, Imagem } = data?.attributes || {};

    return {
        title: Titulo,
        description: getPartText(Texto),
        openGraph: {
            siteName: 'Solid Soluções',
            description: getPartText(Texto) + '...',
            images: [`${prefixApi}${Imagem?.data?.attributes?.url}`]
        }
    };
}

const Article = async ({ params }: Props) => {
    const id = params?.slug?.split('-')[1];

    const { data } = await request({
        path: `blogs/${id}`,
        populate: 'Imagem,Categoria'
    });

    const { Titulo, Categoria, Imagem, Texto } = data?.attributes || {};

    return (
        <main className={shared.container}>
            <header
                className={shared.header}
                style={{
                    backgroundImage: `url(${!data ? '/static/img/header-pessoas.jpg' : `${prefixApi}${Imagem?.data?.attributes?.url}`})`,
                    backgroundBlendMode: 'overlay'
                }}
            >
                {!!Categoria?.data?.attributes?.Nome && (
                    <p className={styles.category}>
                        {Categoria?.data?.attributes?.Nome}
                    </p>
                )}
                {!!Titulo && <h2 className={styles.title}>{Titulo}</h2>}
            </header>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    {!!data ? (
                        <>
                            <h3 className={styles.titleArticle}>{Titulo}</h3>
                            <BlocksRenderer content={Texto} />{' '}
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
