import HeaderHome from '@/components/home/header';
import Impacto from '@/components/home/impacto';
import BlogHome from '@/components/home/blog';
import Team from '@/components/team';

import home from '@/styles/home.module.css';

import { prefixApi } from '@/constants';
import { request } from '@/services/api';

const Home = async () => {
    const data = await request('homes');

    const { texto, imagem } = data[0];

    return (
        <main
            style={{ backgroundImage: `url(${prefixApi}/${imagem.url})` }}
            className={home.container}
        >
            <HeaderHome texto={texto} />
            <Impacto />
            <BlogHome />
            <Team />
        </main>
    );
};

export default Home;
