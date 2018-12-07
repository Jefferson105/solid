import { GET_POSTS, GET_CATEGORIAS } from '../actions/types';

export const initialData = {
    posts: {
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
        loading: true,
        data: null,
        error: null
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

        default:
            return state;
    }
}

export default reducer;