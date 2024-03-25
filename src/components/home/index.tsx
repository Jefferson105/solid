import HeaderHome from '@/components/home/header';
import Impacto from '@/components/home/impacto';
import BlogHome from '@/components/home/blog';
import Team from '@/components/team';

import home from '@/styles/home.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

const Home = async () => {
    const { data } = await request({
        path: 'home',
        populate: 'Impacto,Imagem'
    });

    const {
        Titulo,
        Imagem,
        Impacto: ImpactoArr,
        TituloImpacto
    } = data?.attributes || {};

    return (
        <main
            style={{
                backgroundImage: `url(${prefixApi}${Imagem?.data?.attributes?.url})`
            }}
            className={home.container}
        >
            <HeaderHome texto={Titulo} />
            <Impacto title={TituloImpacto} data={ImpactoArr} />
            <BlogHome />
            <Team />
        </main>
    );
};

export default Home;
