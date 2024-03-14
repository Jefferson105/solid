import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('desenvolvimentopessoas');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const GestaoPessoas = async () => {
    const { frase_principal, frase_secundaria, imagem } = (
        await request('desenvolvimentopessoas')
    )[0];

    return (
        <ServicePage
            image={String(imagem?.url)}
            title={frase_principal}
            text={frase_secundaria}
            figImg="/static/img/pessoas-photo.jpg"
            icon="/static/img/multiple-users.svg"
            textMini="Nosso modelo de desenvolvimento, ajuda os líderes a gerirem de forma efetiva e prática, sem jamais delegar suas responsabilidades ao “RH”, aprendendo a dar feedbacks de maneira correta, delegar tarefas, comunicar-se com assertividade, melhorar o relacionamento com a equipe, saber como lidar com momentos de crises e tomar decisões importantes, além de adquirir técnicas para otimização do próprio tempo e da equipe e, criar estratégias para que o negócio possa crescer financeiramente, com a participação ativa de todos."
            remove={['people']}
        />
    );
};

export default GestaoPessoas;
