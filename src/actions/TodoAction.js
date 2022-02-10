import axios from "axios";

export const GET_TODOS_LIST = "GET_TODOS_LIST"
export const POST_TODOS_CREATE = "POST_TODOS_CREATE"

export const getTodosList = () => {
    return (dispatch) => {
        axios.get('https://my-json-server.typicode.com/Nugrh/reactjs-redux/todos')
            .then(function (response) {
                dispatch({
                    type: GET_TODOS_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_TODOS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    };
};

export const postTodosCreate = (data) => {
    return (dispatch) => {
        axios
            .post('https://my-json-server.typicode.com/Nugrh/reactjs-redux/todos', data)
            .then(function (response) {
                dispatch({
                    type: POST_TODOS_CREATE,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: POST_TODOS_CREATE,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    };
};