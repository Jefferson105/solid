const prefix = "http://www.solidsolucoes.com.br:8197";

export const request = (url) => 
    new Promise(async (resolve, reject) => {
        try {
            let res = await fetch(`${prefix}/${url}`);
            let data = await res.json();

            resolve(data);
        }catch(err) {
            reject(err);
        }
    })