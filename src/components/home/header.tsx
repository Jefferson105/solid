import Link from 'next/link';

import ScrollBtn from '@/components/scroll-btn';

import home from '@/styles/home.module.css';
import shared from '@/styles/shared.module.css';

const HeaderHome = ({ texto }: { texto: string }) => (
    <header className={home.header}>
        <div className={home.info}>
            <h1 className={home.title}>{texto}</h1>

            <Link className={shared.link} href="/contato?consultor=true">
                Fale com nossos consultores
            </Link>
            <ScrollBtn distance={700} />
        </div>
    </header>
);

export default HeaderHome;
