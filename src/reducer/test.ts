import { produce } from 'immer';

export const initialState = {
    counterLoading: false,
    counterDone: true,
    counterError: null,
    number: 0,
};

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'COUNTER_REQUEST':
                draft.counterLoading = true;
                draft.counterDone = false;
                draft.counterError = null;
                break;
            case 'COUNTER_SUCCESS':
                draft.counterLoading = false;
                draft.counterDone = true;
                draft.counterError = null;
                draft.number = draft.number + 1;
                break;
            case 'COUNTER_FAIL':
                draft.counterLoading = false;
                draft.counterDone = false;
                draft.counterError = '에러에러';
        }
    });
};

export default reducer;
