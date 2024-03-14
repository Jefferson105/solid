import Link from 'next/link';
import Image from 'next/image';

import GrowUp from '@/components/grow-up';

import styles from '@/styles/service.module.css';
import shared from '@/styles/shared.module.css';

import { prefixApi } from '@/constants';

interface IProps {
    image: string;
    figImg?: string;
    icon: string;
    title: string;
    text: string;
    desc?: string;
    textMini?: string;
    remove: string[];
    list?: { text: JSX.Element; image: string }[];
}

const ServicePage = ({
    image,
    figImg,
    icon,
    title,
    text,
    desc,
    textMini,
    remove,
    list
}: IProps) => {
    return (
        <main className={shared.container}>
            <header
                className={styles.header}
                style={{ backgroundImage: `url(${prefixApi + '/' + image})` }}
            >
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.button}>
                    <Image width={56} height={56} alt="Ícone" src={icon} />
                </div>
            </header>

            <section>
                <p className={styles.text}>{text}</p>
                {!!(desc && figImg) && (
                    <div className={styles.wrapedText}>
                        <figure
                            className={styles.fig50}
                            style={{ backgroundImage: `url(${figImg})` }}
                        />
                        <p className={styles.text50}>{desc}</p>
                    </div>
                )}
                {!!(!desc && figImg) && (
                    <figure
                        className={styles.fig100}
                        style={{ backgroundImage: `url(${figImg})` }}
                    />
                )}

                {!!list?.length && (
                    <ul className={styles.list}>
                        {list.map((item, i) => (
                            <li className={styles.item} key={i}>
                                <figure
                                    className={styles.itemFig}
                                    style={{
                                        backgroundImage: `url(${item.image})`
                                    }}
                                />
                                <div className={styles.itemTxt}>
                                    {item.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {!!textMini && <p className={styles.textMini}>{textMini}</p>}

                <Link className={styles.contato} href="/contato?consultor=true">
                    Fale com nossos consultores
                </Link>
            </section>
            <GrowUp
                remove={remove}
                title="Fazemos ainda mais pelo seu negócio"
            />
        </main>
    );
};

export default ServicePage;
