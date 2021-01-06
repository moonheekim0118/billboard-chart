import { searchHistory } from '../model/searchHistory';

// 검색기록 추가
export const setItem = (key: string, value: string) => {
    if (value === null || value === undefined || value.length === 0) return;
    const RefinedValue = { id: Date.now(), value: value };
    const exItems = getItem(key);
    // 중복된 값 거르기
    const result = exItems.filter((element) => element.value !== value);
    result.unshift(RefinedValue);
    const toJson = JSON.stringify(result);
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
