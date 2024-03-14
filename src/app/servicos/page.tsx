import { Metadata } from 'next';

import GrowUp from '@/components/grow-up';

import styles from '@/styles/about.module.css';
import shared from '@/styles/shared.module.css';

export const metadata: Metadata = {
    title: 'Solid Serviços',
    description: 'Solid Soluções'
};

const Servicos = () => {
    return (
        <main className={shared.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Mais do que uma consultoria de gestão, somos uma empresa que
                    nasceu para transformar seu negócio e acelerar os
                    resultados.
                </h2>
            </header>
            <GrowUp />
        </main>
    );
};

export default Servicos;
