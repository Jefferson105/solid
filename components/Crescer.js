import Router from "next/router";

const defaultTitle = "Como ajudamos seu negócio a crescer";

const Crescer = ({ remove = [], title = defaultTitle }) =>
    <section className="sobre__crescer">
        <h3 className="impacto__title">{title}</h3>
        <ul className="sobre__crescer-list">
            {
                !!(remove.indexOf("estrategica") === -1) &&
                <li onClick={() => Router.push("/gestao-estrategica", { shallow: true })} className="sobre__crescer-item">
                    <figure className="sobre__icons">
                        <img src="/static/img/setting-gears.svg" />
                    </figure>
                    <h3 className="sobre__crescer-h3">Gestão<br /><b>Estratégica</b></h3>
                    <p className="sobre__crescer-text">Quando falamos de Consultoria em Gestão de Pessoas logo associamos ao desenvolvimento e capacitação do capital humano.</p>
                    <a className="sobre__saiba">Saiba mais</a>
                </li>
            }
            {
                !!(remove.indexOf("pessoas") === -1) &&
                <li onClick={() => Router.push("/gestao-pessoas", { shallow: true })} className="sobre__crescer-item">
                    <figure className="sobre__icons">
                        <img src="/static/img/multiple-users.svg" />
                    </figure>
                    <h3 className="sobre__crescer-h3">Consultoria em<br /><b>Gestão de Pessoas</b></h3>
                    <p className="sobre__crescer-text">Nosso modelo de treinamento ajuda os líderes a gerirem uma equipe de forma efetiva, aprendendo a dar feedbacks de maneira correta, delegar tarefas e comunicar-se com assertividade.</p>
                    <a className="sobre__saiba">Saiba mais</a>
                </li>
            }
            {
                !!(remove.indexOf("empresarial") === -1) &&
                <li onClick={() => Router.push("/gestao-empresarial", { shallow: true })} className="sobre__crescer-item">
                    <figure className="sobre__icons">
                        <img src="/static/img/desktop-monitor.svg" />
                    </figure>
                    <h3 className="sobre__crescer-h3">Software de<br /><b>Gestão Empresarial</b></h3>
                    <p className="sobre__crescer-text">Por meio desse sistema, o gestor passa a ter acesso a um dashboard, onde tem a possibilidade de acompanhar a evolução dos resultados em tempo real e de qualquer lugar.</p>
                    <a className="sobre__saiba">Saiba mais</a>
                </li>
            }
            {
                !!(remove.indexOf("vendas") === -1) &&
                <li onClick={() => Router.push("/vendas-marketing", { shallow: true })} className="sobre__crescer-item">
                    <figure className="sobre__icons">
                        <img src="/static/img/funnel.svg" />
                    </figure>
                    <h3 className="sobre__crescer-h3">Vendas e<br /><b>Marketing</b></h3>
                    <p className="sobre__crescer-text">Temos a fórmula certa para ajudar sua empresa a construir uma estrutura de máquina de venda com o objetivo de acelerar os resultados e aumentar o número de contratos fechados.</p>
                    <a className="sobre__saiba">Saiba mais</a>
                </li>
            }
        </ul>
    </section>

export default Crescer;