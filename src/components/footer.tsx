import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/footer.module.css';
import shared from '@/styles/shared.module.css';

import { menuList } from '@/data';
import { multiCssClass } from '@/utils';
import { prefixApi } from '@/constants';

interface IProps {
    Endereco: string;
    CEP: string;
    Cidade: string;
    NewsLetter: string;
    Email: string;
    Numeros: { Numero: string }[];
    SocialMedia: { Nome: string; Link: string; Icon: any }[];
}

const Footer = async ({
    Endereco,
    CEP,
    Cidade,
    Numeros,
    NewsLetter,
    Email,
    SocialMedia
}: IProps) => (
    <footer className={styles.container}>
        <div className={styles.content}>
            <div className={styles.info}>
                <figure>
                    <Image
                        width={116}
                        height={48}
                        alt="Logo Solid Azul"
                        src="/static/img/logo_solid_blue.svg"
                    />
                </figure>
                <div>
                    <p>{Endereco}</p>
                    <p>CEP {CEP}</p>
                </div>
                <p>{Cidade}</p>
                {Numeros.map((n, i) => (
                    <p key={i}>Telefone: {n.Numero}</p>
                ))}
                <p>Email: {Email}</p>
                <div className={styles.social}>
                    {SocialMedia.map((s, i) => (
                        <a href={s.Link} target="_blank" key={i}>
                            <Image
                                width={24}
                                height={24}
                                alt={`${s.Nome} Link`}
                                src={prefixApi + s?.Icon?.data?.attributes?.url}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <ul className={styles.list}>
                {menuList.map((m, i) => (
                    <li key={i} className={styles.item}>
                        <Link href={m.path}>{m.name}</Link>
                    </li>
                ))}
            </ul>
            <div className={styles.form}>
                <h4 className={styles.title}>
                    Receba dicas para transformar seu negócio
                </h4>
                <form
                    action={NewsLetter}
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    noValidate
                >
                    <input
                        className={styles.input}
                        type="email"
                        name="EMAIL"
                        placeholder="Seu e-mail"
                    />
                    <input
                        className={styles.input}
                        name="FNAME"
                        type="text"
                        placeholder="Seu nome"
                    />
                    <button
                        className={multiCssClass(shared.link, styles.button)}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
        <p className={styles.copyright}>
            Solid Gestão Empresarial &copy; - Todos os direitos reservados
        </p>
    </footer>
);

export default Footer;

//<a href="https://www.facebook.com/SolidGestaoEmpresarial/" target="_blank" className="footer__social"><img src="/static/img/twitter-logo.svg" />
