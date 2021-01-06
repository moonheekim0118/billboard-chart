import { initResult, searchResult } from '../model/searchResult';

export const dataParser = (data: initResult[]): searchResult[] => {
    const parsedData = [];
    data.map((element) => parsedData.push(element.result));
    return parsedData;
};
