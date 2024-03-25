import Image from 'next/image';

import styles from '@/styles/modal.module.css';
import shared from '@/styles/shared.module.css';

interface IProps {
    onClose: () => void;
    loading: boolean;
    error?: string;
}

const Modal = ({ onClose, loading, error }: IProps) => (
    <div onClick={onClose} className={styles.overlay}>
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
            <button onClick={onClose} className={styles.close}>
                x
            </button>
            {loading && (
                <Image
                    width={32}
                    height={32}
                    className={shared.rotate}
                    alt="Loading icon"
                    src="/static/img/loading.svg"
                />
            )}
            {!!error && <p className={styles.error}>{error}</p>}
            {!error && !loading && <p>Seu email foi enviado com sucesso.</p>}
        </div>
    </div>
);

export default Modal;
