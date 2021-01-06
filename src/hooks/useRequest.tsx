import { useState, useCallback, useEffect } from 'react';
import { api } from '../api';
import { setItem, getItem } from '../util/sessionStorage';

const useRequest = (type: string, artist?: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (type === 'getArtistInfo') {
            fetchArtistData('1');
        } else {
            setData(getItem('searchResult'));
        }
    }, []);

    const fetchSearchData = useCallback(async (value: string) => {
        setLoading(true);
        const result = await api.search(value);
        if (!result.isError) {
            setData(result.data);
            setLoading(false);
            setError(false);
            setItem('searchResult', result.data);
            console.log(result.data);
        } else {
            setLoading(false);
            setError(true);
        }
    }, []);

    const fetchArtistData = useCallback(async (page: string) => {
        setLoading(true);
        const result = await api.getArtistInfo(artist, page);
        if (!result.isError) {
            setData(result.data.songs);
            setLoading(false);
            setError(false);
        } else {
            setLoading(false);
            setError(true);
        }
    }, []);

    if (type === 'getArtistInfo') {
        return [data, loading, error, fetchArtistData] as const;
    }

    return [data, loading, error, fetchSearchData] as const;
};

export default useRequest;
