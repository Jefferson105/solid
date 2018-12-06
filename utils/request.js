const prefix = "http://ec2-18-207-92-198.compute-1.amazonaws.com:1337";

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