import axios, { Method } from 'axios';
const ENDPOINT = 'https://genius.p.rapidapi.com';
const PER_PAGE = 5;

interface headers {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
}

interface option {
    method: Method;
    url: string;
    params?: {};
    headers: headers;
}

const headers = {
    'x-rapidapi-key': 'c04bbb49aamshaa4aa8bb2dfd58bp10eaf7jsn3ac2b0e17ff1',
    'x-rapidapi-host': 'genius.p.rapidapi.com',
};

const request = async (option: option) => {
    try {
        const result = await axios.request(option);
        return result.data.response;
    } catch (error) {
        throw {
            message: error.message,
            status: error.status,
        };
    }
};

export const api = {
    search: async (keyword: string) => {
        try {
            const option: option = {
                method: 'GET',
                url: ENDPOINT + '/search',
                params: { q: keyword },
                headers: headers,
            };
            const data = await request(option);
            return {
                isError: false,
                data: data.hits,
            };
        } catch (error) {
            return {
                isError: true,
                error: error,
            };
        }
    },

    getArtistInfo: async (id: string, nextPage: string) => {
        try {
            const option: option = {
                method: 'GET',
                url: ENDPOINT + `/artists/${id}/songs`,
                params: {
                    sort: 'popularity',
                    page: nextPage,
                    per_page: PER_PAGE,
                },
                headers: headers,
            };
            const data = await request(option);
            return {
                isError: false,
                data: data,
            };
        } catch (error) {
            return {
                isError: true,
                error: error,
            };
        }
    },
};
