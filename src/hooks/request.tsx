'use client';

import { request } from '@/services/api';
import { useCallback, useEffect, useReducer } from 'react';

import { genericReducer } from '@/lib/reducer';

const apiData: Record<string, unknown> = {};

interface IProps {
    name: string;
    populate?: string;
    sort?: string;
    limit?: number;
}

const useRequest = ({ name, populate, sort, limit }: IProps) => {
    const [info, dispatch] = useReducer(genericReducer, {
        data: [],
        loading: false,
        error: null
    });

    const getData = useCallback(async () => {
        try {
            if (typeof apiData[name] !== 'undefined') {
                dispatch({ data: apiData[name], loading: false });
                return;
            }

            dispatch({ loading: true });

            const { data } = await request({
                path: name,
                populate,
                sort,
                limit
            });

            apiData[name] = data;

            dispatch({ data, loading: false });
        } catch (err) {
            dispatch({ error: err });
        }
    }, [name, populate, sort, limit]);

    useEffect(() => {
        if (!name) return;

        getData();
    }, [name, getData]);

    return info;
};

export default useRequest;
