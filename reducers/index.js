import { GET_POSTS, GET_CATEGORIAS, MODAL_EMAIL_CONTATO, GET_BANNERS } from '../actions/types';

export const initialData = {
    prefix: 'http://www.solidsolucoes.com.br:8197',
    posts: {
        list: [],
        fetched: false,
        error: null
    },
    banners: {
        list: [],
        fetched: false,
        error: null
    },
    categorias: {
        list: [],
        fetched: false,
        error: null
    },
    emailContato: {
        show: false,
        loading: false,
        sended: false,
        error: false
    }
};

let reducer = (state = initialData, { type, data }) => {
    switch(type) {
        case GET_POSTS:
            return {
                ...state,
                posts: data
            }

        case GET_CATEGORIAS:
            return {
                ...state,
                categorias: data
            }

        case MODAL_EMAIL_CONTATO:
            return {
                ...state,
                emailContato: data
            }

        case GET_BANNERS: 
            return {
                ...state,
                banners: data
            }

        default:
            return state;
    }
}

export default reducer;