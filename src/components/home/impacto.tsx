'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/impact.module.css';
import animation from '@/styles/animation.module.css';
import shared from '@/styles/shared.module.css';

import { multiCssClass } from '@/utils';

interface IProps {
    title: string;
    data: {
        Titulo: string;
        Texto: string;
        Link: string;
    }[];
}

const Impacto = ({ title, data = [] }: IProps) => {
    const [style, setStyle] = useState({});
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        document.body.onscroll = () => {
            const animationList = document.getElementById('animation-list');

            if (!animationList) return;

            const halfScreen = window.innerHeight / 2;

            const children = Array.from(animationList?.children);

            children.forEach((item, i) => {
                let onScreen = halfScreen > item.getBoundingClientRect().top;

                if (i === 0) {
                    if (onScreen) {
                        setStyle({
                            position: 'fixed',
                            top: '50%',
                            marginTop: '0',
                            translate: 'translateX(-7px)'
                        });
                    } else {
                        setStyle({
                            position: 'relative',
                            top: '0',
                            marginTop: '7rem',
                            translate: 'translateX(0)'
                        });
                    }
                }

                if (i === children.length - 1 && onScreen) {
                    setStyle({
                        position: 'relative',
                        top: '0',
                        marginTop: 'auto',
                        translate: 'translateX(0)'
                    });
                }

                if (onScreen) setCurrent(i);
            });
        };
    }, []);

    return (
        <section className={styles.container}>
            <h2 className={shared.title}>{title}</h2>
            <div className={styles.divider}>
                <div className={styles.animation}>
                    <ul style={style} className={animation.container}>
                        {data.map((_, i) => (
                            <li
                                key={i}
                                className={multiCssClass(
                                    animation.item,
                                    i - data.length + 1 + current >= 0 &&
                                        animation.selected
                                )}
                            >
                                <i></i>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul id="animation-list" className={styles.list}>
                    {data.map((item, i) => (
                        <li key={i} className={styles.item}>
                            <div>
                                <p className={styles.number}>
                                    <span className={styles.number}>
                                        {i + 1}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h4 className={styles.subTitle}>
                                    {item.Titulo}
                                </h4>

                                <p className={styles.text}>{item.Texto}</p>
                                <Link className={styles.link} href={item.Link}>
                                    Saiba mais.
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Impacto;
