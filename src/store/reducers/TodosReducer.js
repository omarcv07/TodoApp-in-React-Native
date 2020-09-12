import * as actionTypes from '../actions/actionTypes';
import uuid from 'react-uuid'

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
                        id: uuid(),
                        todo: action.payload,
                    },
                ],
            };

        case actionTypes.DELETE_TODO: 
            return state.filter(task => task !== action.payload)
        
        default:
            return state
    }
}
