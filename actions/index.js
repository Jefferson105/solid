import { GET_POSTS, GET_CATEGORIAS } from './types';
import { request } from '../utils/request';

export const getPosts = () => {
    return async dispatch => {
        dispatch({ type: GET_POSTS, data: { list: [], fetched: false, error: null }});
        
        try {
            let data = await request('blogposts');

            data = data.map((a, i) => Object.keys(a).reduce((ac, v) => {
                ac[v.replaceSpecialChars().toLowerCase().split(" ").join("_")] = data[i][v];

                return ac;
            }, {}));

            dispatch({ type: GET_POSTS, data: { list: data, fetched: true, error: null }});
        }catch(err) {
            dispatch({ type: GET_POSTS, data: { list: data, fetched: true, error: "Ocorreu um erro ao obter os posts." }});
        }
    }
}

export const getCategorias = () => {
    return async dispatch => {
        dispatch({ type: GET_CATEGORIAS, data: { list: [], fetched: false, error: null }});

        try {
            let data = await request('categorias');

            data = data.map((a, i) => Object.keys(a).reduce((ac, v) => {
                ac[v.replaceSpecialChars().toLowerCase().split(" ").join("_")] = data[i][v];

                return ac;
            }, {}));

            dispatch({ type: GET_CATEGORIAS, data: { list: data, fetched: true, error: null }});
        }catch(err) {
            dispatch({ type: GET_CATEGORIAS, data: { list: data, fetched: true, error: "Ocorreu um erro ao obter as categorias." }});
        }
    }
}