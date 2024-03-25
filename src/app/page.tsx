import Home from '@/components/home';

import { request } from '@/services/api';

export async function generateMetadata() {
    const { data } = await request({ path: 'home', populate: 'Metadata' });

    return {
        title: data?.attributes?.Metadata?.Titulo,
        description: data?.attributes?.Metadata?.Descricao
    };
}

export default Home;
