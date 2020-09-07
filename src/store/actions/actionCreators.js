import * as actionTypes from './actionTypes';

export const addTodo = (todo) => ({
    type: actionTypes.ADD_TODO,
    payload: todo
})

export const deleteTodo = (index) => ({
    type: actionTypes.DELETE_TODO,
    payload: index
})