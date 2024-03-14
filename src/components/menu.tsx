'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from '@/styles/menu.module.css';

import { multiCssClass } from '@/utils';
import { menuList } from '@/data';

const Menu = () => {
    const path = usePathname();

    const fixed = !(path === '/');

    const [currentPath, setPath] = useState(path);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (path != currentPath) setOpen(false);

        setPath(path);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <header
            className={multiCssClass(styles.menu, fixed && styles.menuFixed)}
        >
            {!fixed && (
                <div className={styles.blur}>
                    <div />
                </div>
            )}
            <nav className={styles.content}>
                <div className={styles.menuMobile}>
                    <div
                        onClick={() => setOpen(!open)}
                        className={multiCssClass(
                            styles.menuIcon,
                            open && styles.open
                        )}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <Link href="/" className={styles.menuMobileLogo}>
                        <Image
                            height={48}
                            width={116}
                            src="/static/img/logo_solid_white.svg"
                            alt="Solid Logo"
                        />
                    </Link>
                </div>

                <ul
                    className={multiCssClass(
                        styles.menuList,
                        open && styles.open
                    )}
                >
                    <li className={styles.menuItemLogo}>
                        <Link href="/">
                            {fixed ? (
                                <Image
                                    width={132}
                                    height={55}
                                    alt="Solid logo azul"
                                    src="/static/img/logo_solid_blue.svg"
                                />
                            ) : (
                                <Image
                                    width={132}
                                    height={55}
                                    alt="Solid logo branca"
                                    src="/static/img/logo_solid_white.svg"
                                />
                            )}
                        </Link>
                    </li>
                    {menuList.map((mi, i) => (
                        <li className={styles.menuItem} key={i}>
                            <Link href={mi.path}>{mi.name}</Link>
                            {!!mi.sub && (
                                <ul className={styles.subMenu}>
                                    {mi.sub.map((ms, j) => (
                                        <li key={j}>
                                            <Link href={ms.path}>
                                                <figure>
                                                    <Image
                                                        width={25}
                                                        height={25}
                                                        alt="Ícone de menu"
                                                        src={ms.icon}
                                                    />
                                                </figure>
                                                <span>{ms.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li
                        className={multiCssClass(
                            styles.menuItemTel,
                            fixed && styles.menuItemTelFixed
                        )}
                    >
                        <figure>
                            <Image
                                style={{ transform: 'rotate(-90deg)' }}
                                width={20}
                                height={20}
                                alt="Icone de telefone"
                                src="/static/img/telephone.svg"
                            />
                        </figure>{' '}
                        <span>(11) 941578881</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
