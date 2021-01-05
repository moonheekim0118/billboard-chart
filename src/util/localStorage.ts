import { searchHistory } from '../model/searchHistory';

// 검색기록 추가
export const setItem = (key: string, value: string) => {
    if (value === null || value === undefined) return;
    const RefinedValue = { id: Date.now(), value: value };
    const exItems = getItem(key);
    exItems.push(RefinedValue);
    const toJson = JSON.stringify(exItems);
    localStorage.setItem(key, toJson);
};

// 검색기록 가져오기
export const getItem = (key: string): searchHistory[] => {
    const value = localStorage.getItem(key);
    return value === null ? [] : JSON.parse(value);
};

// 특정 검색기록 삭제하기
export const removeItem = (key: string, id: number) => {
    if (id === null || id === undefined) return;
    const exData = getItem(key);
    const result = exData.filter((element) => element.id !== id);
    const toJson = JSON.stringify(result);
    localStorage.setItem(key, toJson);
};
