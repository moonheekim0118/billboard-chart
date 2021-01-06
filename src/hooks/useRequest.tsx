import { useState, useCallback, useEffect } from 'react';
import { api } from '../api';
import { setItem, getItem } from '../util/sessionStorage';
import { dataParser } from '../util/dataParser';
import { searchResult } from '../model/searchResult';

const useRequest = (type: string, artist?: string) => {
    const [data, setData] = useState<searchResult[]>([]); // fetch로 받아온 데이터 저장
    const [loading, setLoading] = useState<boolean>(false); // fetch loading
    const [error, setError] = useState<boolean>(false); // fetch Error

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
            const parsedData = dataParser(result.data); // 받아온 데이터 파싱
            setData(parsedData);
            setLoading(false);
            setError(false);
            setItem('searchResult', parsedData);
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
