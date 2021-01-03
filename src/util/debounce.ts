export const debounce = (
    func: (key: string, value: any) => void,
    limit: number
) => {
    let inDebounce;

    return function (event) {
        const value = event.target?.value;
        const context = this;
        if (inDebounce) {
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(func.bind(context, 'keyword', value), limit);
    };
};
