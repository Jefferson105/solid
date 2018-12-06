import { GET_POSTS, GET_CATEGORIAS } from '../actions/types';

export const initialData = {
    posts: [],
    categorias: []
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