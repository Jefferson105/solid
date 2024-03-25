import Footer from '@/components/footer';
import Menu from '@/components/menu';
import { request } from '@/services/api';

interface IProps {
    children: React.ReactNode;
}

const BaseLayout = async ({ children }: IProps) => {
    const {
        data: { attributes = null }
    } = await request({
        path: 'info',
        populate: 'Numeros,SocialMedia,SocialMedia.Icon'
    });

    return (
        <>
            <Menu phone={attributes?.Numeros[0]?.Numero} />
            {children}
            <Footer {...attributes} />
        </>
    );
};

export default BaseLayout;
