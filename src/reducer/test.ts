export const initialState = {
    counterLoading: false,
    counterDone: true,
    counterError: null,
    number: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_REQUEST':
            return {
                ...state,
                counterLoading: true,
            };
        case 'COUNTER_SUCCESS':
            return {
                ...state,
                counterLoading: false,
                counterDone: true,
                number: state.number + 1,
            };
        case 'COUNTER_FAIL':
            return {
                ...state,
                counterLoading: false,
                counterDOne: false,
                counterError: '에러에러',
            };

        default:
            return state;
    }
};

export default reducer;
