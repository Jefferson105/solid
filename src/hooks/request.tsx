'use client';

import { request } from '@/services/api';
import { useCallback, useEffect, useReducer } from 'react';

import { genericReducer } from '@/lib/reducer';

const apiData: Record<string, unknown> = {};

interface IProps {
    name: string;
}

const useRequest = ({ name }: IProps) => {
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

            const data = await request(name);

            apiData[name] = data;

            dispatch({ data, loading: false });
        } catch (err) {
            dispatch({ error: err });
        }
    }, [name]);

    useEffect(() => {
        if (!name) return;

        getData();
    }, [name, getData]);

    return info;
};

export default useRequest;
