import fetch from 'isomorphic-fetch';
const prefix = 'https://admin.solidsolucoes.com.br';

export const request = (url) =>
    new Promise(async (resolve, reject) => {
        try {
            if (typeof window == 'undefined') {
                let res = await fetch(`${prefix}/${url}`);
                let data = await res.json();
                resolve(data);
            } else {
                let res = await fetch(`/request/${url}`);
                let data = await res.json();
                resolve(data.data);
            }
        } catch (err) {
            reject(err);
        }
    });
