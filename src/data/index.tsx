export const menuList = [
    { name: 'Sobre a Solid', path: '/sobre' },
    {
        name: 'Nossos Serviços',
        path: '/servicos',
        sub: [
            {
                name: (
                    <>
                        Planejamento <b>Estratégico</b>
                    </>
                ),
                path: '/gestao-estrategica',
                icon: '/static/img/setting-gears.svg'
            },
            {
                name: (
                    <>
                        Desenvolvimento
                        <b> de Pessoas</b>
                    </>
                ),
                path: '/gestao-pessoas',
                icon: '/static/img/multiple-users.svg'
            },
            {
                name: (
                    <>
                        Software de <b>Gestão Empresarial</b>
                    </>
                ),
                path: '/gestao-empresarial',
                icon: '/static/img/desktop-monitor.svg'
            },
            {
                name: (
                    <>
                        Vendas e <b>Marketing</b>
                    </>
                ),
                path: '/vendas-marketing',
                icon: '/static/img/funnel.svg'
            }
        ]
    },
    { name: 'Cases', path: '/cases' },
    { name: 'Contato', path: '/contato' },
    { name: 'Blog', path: '/blog' }
];

export const impactData = [
    {
        name: (
            <>
                Planejamento <strong>Estratégico</strong>
            </>
        ),
        desc: 'O ritmo de crescimento do negócio estagnou? Já parou para pensar que o problema pode estar na gestão corporativa? As falhas no processo de gestão das companhias são as grandes responsáveis pelo não atingimento de metas, ROI e demais problemas organizacionais. Nós te apoiamos a virar essa página e retomar o crescimento.',
        path: '/gestao-estrategica'
    },
    {
        name: <strong>Desenvolvimento de Pessoas</strong>,
        desc: 'Empresas são resultados de pessoas. Se não forem pertencentes e engajadas, consequentemente, os resultados ficarão aquém do desejado. Desenhamos uma oferta de consultoria em gestão de pessoas, de acordo com as necessidades, para manter os colaboradores da empresa totalmente alinhados com o seu plano de negócio.',
        path: '/gestao-empresarial'
    },
    {
        name: (
            <>
                <strong>Software de Gestão</strong> customizado
            </>
        ),
        desc: 'Para transformar a sua empresa e acelerar os resultados, é importante gerir bem as informações para ter uma tomada de decisão assertiva. Esqueça o controle manual e veja como a Solid pode lhe ajudar nessa etapa.',
        path: '/gestao-pessoas'
    },
    {
        name: (
            <>
                <strong>Marketing e</strong> vendas
            </>
        ),
        desc: ' Depois de implementar todas as mudanças necessárias para o crescimento é a hora de pensar em dois pontos essenciais: como estruturar e acelerar o processo de vendas e se comunicar adequadamente com todo o ecossistema. Entenda como a Solid pode ajudar.',
        path: '/vendas-marketing'
    }
];

export const growList = [
    {
        title: (
            <>
                Planejamento
                <br />
                <strong>Estratégico</strong>
            </>
        ),
        text: 'Quando falamos de Consultoria em Gestão de Pessoas logo associamos ao desenvolvimento e capacitação do capital humano.',
        image: '/static/img/setting-gears.svg',
        path: '/gestao-estrategica',
        slug: 'strategy'
    },
    {
        title: (
            <>
                Consultoria em
                <br />
                <strong>Gestão de Pessoas</strong>
            </>
        ),
        text: 'Nosso modelo de treinamento ajuda os líderes a gerirem uma equipe de forma efetiva, aprendendo a dar feedbacks de maneira correta, delegar tarefas e comunicar-se com assertividade.',
        image: '/static/img/multiple-users.svg',
        path: '/gestao-pessoas',
        slug: 'people'
    },
    {
        title: (
            <>
                Software de
                <br />
                <strong>Gestão Empresarial</strong>
            </>
        ),
        text: 'Por meio desse sistema, o gestor passa a ter acesso a um dashboard, onde tem a possibilidade de acompanhar a evolução dos resultados em tempo real e de qualquer lugar.',
        image: '/static/img/desktop-monitor.svg',
        path: '/gestao-empresarial',
        slug: 'enterprise'
    },
    {
        title: (
            <>
                Vendas e<br />
                <strong>Marketing</strong>
            </>
        ),
        text: 'Temos a fórmula certa para ajudar sua empresa a construir uma estrutura de máquina de venda com o objetivo de acelerar os resultados e aumentar o número de contratos fechados.',
        image: '/static/img/funnel.svg',
        path: '/vendas-marketing',
        slug: 'sell'
    }
];

export const contactList = [
    {
        text: 'contato@solidsolucoes.com.br',
        image: '/static/img/envelope.svg'
    },
    {
        text: '(11) 941578881',
        image: '/static/img/telephone.svg'
    },
    {
        text: '(11) 41038163',
        image: '/static/img/telephone.svg'
    }
];
