import { prefixApi } from '@/constants';

export const cacheApi: Record<string, any> = {};

export const request = (path: string): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            if (typeof cacheApi[path] !== 'undefined') {
                resolve(cacheApi[path]);
                return;
            }

            let res = await fetch(`${prefixApi}/${path}`);
            let data = await res.json();

            cacheApi[path] = data;

            resolve(data);
        } catch (err) {
            console.log('Api err', err);
            reject(err);
        }
    });
