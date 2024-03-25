'use client';

import Image from 'next/image';

import shared from '@/styles/shared.module.css';

const ScrollBtn = ({ distance }: { distance: number }) => {
    return (
        <button
            className={shared.scroll}
            onClick={() => {
                window.scrollTo({
                    behavior: 'smooth',
                    left: 0,
                    top: distance
                });
            }}
        >
            <Image
                width={32}
                height={32}
                alt="Botão de scroll"
                src="/static/img/expand-button.svg"
            />
        </button>
    );
};

export default ScrollBtn;
