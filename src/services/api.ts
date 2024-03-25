import { apiToken, prefixApi } from '@/constants';

const cacheApi: Record<string, any> = {};

interface IRequest {
    path: string;
    populate?: string;
    sort?: string;
    limit?: number;
}

export const request = ({
    path,
    populate,
    sort,
    limit
}: IRequest): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            let query: string[] = [];

            if (populate) query.push(`populate=${populate}`);
            if (sort) query.push(`sort=${sort}`);
            if (limit) query.push(`pagination[pageSize]=${limit}`);

            const url = `${path}${query.length ? '?' + query.join('&') : ''}`;

            if (typeof cacheApi[url] !== 'undefined') {
                resolve(cacheApi[url]);
                return;
            }

            let res = await fetch(`${prefixApi}/api/${url}`, {
                headers: { Authorization: `bearer ${apiToken}` }
            });

            let data = await res.json();

            cacheApi[url] = data;

            resolve(data);
        } catch (err) {
            console.log('Api err', err);
            reject(err);
        }
    });
