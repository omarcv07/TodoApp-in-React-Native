import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todo: [],
};

export const RootReducer = (state = initialState, action) =>  {
    switch (action.type) {

        case actionTypes.ADD_TODO:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        todo: action.payload,
                        date: new Date().toISOString(),
                    },
                ],
            };
            

        default:
            return state
    }
}
