import ServicePage from '@/components/service-page';

import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('vendasmarketings');

    return {
        title: data[0]?.titulo,
        description: data[0]?.descricao
    };
}

const VendaMarketing = async () => {
    const { frase_principal, frase_secundaria, imagem } = (
        await request('vendasmarketings')
    )[0];

    return (
        <ServicePage
            image={String(imagem?.url)}
            title={frase_principal}
            text={frase_secundaria}
            icon="/static/img/funnel.svg"
            list={[
                {
                    text: (
                        <p>
                            <b>
                                Primeiro vamos entender o seu negócio e
                                compreender sua estrutura comercial.
                            </b>{' '}
                            O próximo passo é definir quem são as personas e o
                            público-alvo e, então, construiremos uma estratégia
                            go to market, juntamente com os canais de vendas
                            adequados e a implementação da automação no processo
                            de vendas.
                        </p>
                    ),
                    image: '/static/img/meeting.jpg'
                },
                {
                    text: (
                        <p>
                            <b>
                                Em paralelo a isso, é preciso saber como o
                                mercado enxerga sua empresa?
                            </b>{' '}
                            Seus concorrentes sabem exatamente o que você faz? E
                            você está se comunicando de forma correta com todos
                            os stakeholders?
                        </p>
                    ),
                    image: '/static/img/img_solid7.jpg'
                },
                {
                    text: (
                        <p>
                            Para suprir o gap de comunicação do seu negócio, a
                            Solid conta com uma área específica de Comunicação,
                            com foco em estratégias de Marketing.{' '}
                            <b>
                                {' '}
                                Nosso propósito é construir adequadamente o
                                posicionamento da sua marca no mercado por meio
                                do trabalho de comunicação, visando a geração de
                                leads.
                            </b>
                        </p>
                    ),
                    image: '/static/img/planning.jpg'
                }
            ]}
            remove={['sell']}
        />
    );
};

export default VendaMarketing;
