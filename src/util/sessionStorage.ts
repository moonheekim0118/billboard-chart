// SessionStorage에 들어가는 것
// 1.keyword
// 2.searchResult
export const setItem = (key: string, value) => {
    if (value === null || value === undefined) return;
    const toJson = JSON.stringify(value);
    sessionStorage.setItem(key, toJson);
};

export const getItem = (key: string) => {
    const value = sessionStorage.getItem(key);
    if (key === 'searchResult') {
        return value === null ? [] : JSON.parse(value);
    }
    return value === null ? null : JSON.parse(value);
};
