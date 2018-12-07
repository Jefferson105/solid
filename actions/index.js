import { GET_POSTS, GET_CATEGORIAS, MODAL_EMAIL_CONTATO } from './types';
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
            dispatch({ type: GET_POSTS, data: { list: [], fetched: true, error: "Ocorreu um erro ao obter os posts." }});
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
            dispatch({ type: GET_CATEGORIAS, data: { list: [], fetched: true, error: "Ocorreu um erro ao obter as categorias." }});
        }
    }
}

export const enviarEmailContato = (info) => {
    return async dispatch => {
        dispatch({ type: MODAL_EMAIL_CONTATO, data: { show: true, loading: true, sended: false, error: null } });

        try {
            let mensagem = 
`Nome: ${info.nome}
Email: ${info.email}
Empresa: ${info.empresa}
Departamento: ${info.departamento}
Mensagem: ${info.mensagem}`;
            let assunto = "Contato site SOLID";

            var res = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ mensagem, assunto, name: "Contato Site SOLID" })
            });
    
            var { sucesso, mensagem, erro } = await res.json();

            if(sucesso) {
                dispatch({ type: MODAL_EMAIL_CONTATO, data: { show: true, loading: false, sended: true, error: null }});
            }else {
                console.log(erro);
                dispatch({ type: MODAL_EMAIL_CONTATO, data: { show: true, loading: false, sended: true, error: true }});
            }
        }catch(err) {
            console.error(err);
            dispatch({ type: MODAL_EMAIL_CONTATO, data: { show: true, loading: false, sended: true, error: true }});
        }
    }
}

export const closeModalEmail = () => {
    return { type: MODAL_EMAIL_CONTATO, data: { show: false, loading:false, sended: false, error: false }};
}