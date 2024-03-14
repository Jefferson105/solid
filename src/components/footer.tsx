import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/footer.module.css';
import shared from '@/styles/shared.module.css';

import { menuList } from '@/data';
import { multiCssClass } from '@/utils';

const Footer = () => (
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
                    <p>R. Jurubatuba, 1350</p>
                    <p>SL. 625 - Centro</p>
                    <p>CEP 09725-000</p>
                </div>
                <p>São Bernardo do Campo - SP</p>
                <p>Telefone: (11) 941578881</p>
                <p>Telefone: (11) 41038163</p>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/SolidGestaoEmpresarial/"
                        target="_blank"
                    >
                        <Image
                            width={24}
                            height={24}
                            alt="Facebook Link"
                            src="/static/img/facebook-logo.svg"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/solid-consultoria-em-gestao-empresarial/"
                        target="_blank"
                    >
                        <Image
                            width={24}
                            height={24}
                            alt="Linkedin link"
                            src="/static/img/linkedin-logo.svg"
                        />
                    </a>
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
                    action="https://solidsolucoes.us19.list-manage.com/subscribe/post?u=f6a8b65cd28d281b2c0856998&amp;id=bc061a8c5b"
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
