import { GET_TODOS_LIST, POST_TODOS_CREATE } from '../actions/TodoAction';
import { getTodosList } from '../actions/TodoAction';

let initialState = {
    getTodosList: false,
    errorTodosList: false,
    getResposDataTodo: false,
    errorResposDataTodo: false,
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_LIST:
            return {
                ...state,
                getTodosList: action.payload.data,
                errorTodosList: action.payload.errorMessage
            };
        case POST_TODOS_CREATE:
            return {
                ...state,
                getResposDataTodo: action.payload.data,
                errorResposDataTodo: action.payload.errorMessage,
                initialState,
                reducers: {}

            };
        default:
            return state;
    };
};

export default todos;
