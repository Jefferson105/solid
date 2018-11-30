import Link from "next/link";

const Footer = () =>
    <footer className="footer">
        <div className="footer__content">
            <div>
                <figure>
                    <img className="footer__logo" src="/static/img/logo_solid_blue.svg" />
                </figure>
                <p className="footer__txt footer__txt--top">R. Jurubatuba, 1350</p>
                <p className="footer__txt">Salas 618,619 - Centro</p>
                <p className="footer__txt">CEP 09725-000</p>
                <p className="footer__txt footer__txt--top">São Bernardo do Campo - SP</p>
                <p className="footer__txt footer__txt--top">Telefone: (11) 4330-2784</p>
                <p className="footer__socials">
                    <a className="footer__social"><img src="/static/img/facebook-logo.svg" /></a>
                    <a className="footer__social"><img src="/static/img/twitter-logo.svg" /></a>
                    <a className="footer__social"><img src="/static/img/linkedin-logo.svg" /></a>
                </p>
            </div>
            <div className="footer__list-content">
                <ul className="footer__list">
                    <li className="footer__item"><Link href="/servicos" prefetch><a className="link">Nossos Serviços</a></Link></li>
                    <li className="footer__item"><Link href="/sobre" prefetch><a className="link">Sobre a Solid</a></Link></li>
                    <li className="footer__item"><Link href="/clientes" prefetch><a className="link">Clientes</a></Link></li>
                    <li className="footer__item"><Link href="/contato" prefetch><a className="link">Contato</a></Link></li>
                    <li className="footer__item"><Link href="/blog" prefetch><a className="link">Blog</a></Link></li>
                </ul>
            </div>
            <div>
                <div className="footer__box">
                    <h4 className="footer__title">Receba dicas para transformar seu negócio</h4>
                    <input className="footer__input footer__input--marg" placeholder="Seu e-mail" />
                    <input className="footer__input" placeholder="Seu nome" />
                    <button className="header__button footer__button">Cadastrar</button>
                </div>
            </div>
        </div>
        <p className="footer__p">Solid Gestão Empresarial &copy; - Todos os direitos reservados</p>
    </footer>

export default Footer;