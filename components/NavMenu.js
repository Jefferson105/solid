import { connect } from 'react-redux';
import Link from 'next/link';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            menuMobile: false
        };
    }

    render() {
        const { isFixed } = this.props;
        const { showMenu, menuMobile } = this.state;

        return (
            <nav className={`nav-menu ${!!isFixed && 'nav-menu--fixed'}`}>
                <div className="only__mobile menu-mobile">
                    <div
                        id="nav-icon4"
                        className={`${!!menuMobile && 'open'}`}
                        onClick={() =>
                            this.setState({ menuMobile: !menuMobile })
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <Link href="/">
                        <a className="menu-mobile__logo">
                            <img
                                className="nav-menu__logo"
                                src="/static/img/logo_solid_white.svg"
                            />
                        </a>
                    </Link>
                </div>

                <ul
                    className={`nav-menu__list ${
                        !!menuMobile && 'nav-menu__list--open'
                    }`}
                >
                    <li className="nav-menu__item nav-menu__item--logo">
                        <Link href="/">
                            <a className="nav-menu__link">
                                {isFixed ? (
                                    <img
                                        className="nav-menu__logo"
                                        src="/static/img/logo_solid_blue.svg"
                                    />
                                ) : (
                                    <img
                                        className="nav-menu__logo"
                                        src="/static/img/logo_solid_white.svg"
                                    />
                                )}
                            </a>
                        </Link>
                    </li>
                    <li className="nav-menu__item nav-menu__item--item">
                        <Link href="/sobre">
                            <a className="nav-menu__link">Sobre a Solid</a>
                        </Link>
                    </li>
                    <li
                        onClick={() => this.setState({ showMenu: !showMenu })}
                        className="nav-menu__item nav-menu__item--item"
                    >
                        Nossos Serviços
                        {!!showMenu && (
                            <ul
                                onClick={(e) => e.stopPropagation()}
                                className="sub-menu"
                            >
                                <li className="sub-menu__item">
                                    <Link href="/gestao-estrategica">
                                        <a className="nav-menu__link sub-menu__link">
                                            <figure className="sub-menu__icon">
                                                <img src="/static/img/setting-gears.svg" />
                                            </figure>
                                            <span className="sub-menu__text">
                                                Planejamento <b>Estratégico</b>
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link href="/gestao-pessoas">
                                        <a className="nav-menu__link sub-menu__link">
                                            <figure className="sub-menu__icon">
                                                <img src="/static/img/multiple-users.svg" />
                                            </figure>
                                            <span className="sub-menu__text">
                                                Desenvolvimento
                                                <b> de Pessoas</b>
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link href="/gestao-empresarial">
                                        <a className="nav-menu__link sub-menu__link">
                                            <figure className="sub-menu__icon">
                                                <img src="/static/img/desktop-monitor.svg" />
                                            </figure>
                                            <span className="sub-menu__text">
                                                Software de{' '}
                                                <b>Gestão Empresarial</b>
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link href="/vendas-marketing">
                                        <a className="nav-menu__link sub-menu__link">
                                            <figure className="sub-menu__icon">
                                                <img src="/static/img/funnel.svg" />
                                            </figure>
                                            <span className="sub-menu__text">
                                                Vendas e <b>Marketing</b>
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-menu__item nav-menu__item--item">
                        <Link href="/clientes">
                            <a className="nav-menu__link">Cases</a>
                        </Link>
                    </li>
                    <li className="nav-menu__item nav-menu__item--item">
                        <Link href="/contato">
                            <a className="nav-menu__link">Contato</a>
                        </Link>
                    </li>
                    <li className="nav-menu__item nav-menu__item--item">
                        <Link href="/blog">
                            <a className="nav-menu__link">Blog</a>
                        </Link>
                    </li>
                    <li
                        className={`nav-menu__item nav-menu__item--cel ${
                            isFixed && 'nav-menu__item--tel-fixed'
                        }`}
                    >
                        <span className="nav-menu__item--tel-container">
                            <img
                                className="nav-menu__tel"
                                src="/static/img/telephone.svg"
                            />
                        </span>{' '}
                        <span>(11) 941578881</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default connect((state) => state)(NavMenu);
