import Home from '@/components/home';
import { request } from '@/services/api';

export async function generateMetadata() {
    const data = await request('homes');

    return {
        title: data[0]?.titulo,
        description: data[0]?.description
    };
}

export default Home;
