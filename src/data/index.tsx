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
