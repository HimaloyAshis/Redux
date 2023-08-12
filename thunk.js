// async action - api calling.
// api url- https://jsonplaceholder.typicode.com/todos

const { createStore } = require("redux")

// middleware - redux-thunk

// axios api

// constants 

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"


// state

const initialTodoStates = {
    todos : [],
    isLoading : false,
    error: null
}


// action

const getTodosRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosError = (error)=>{
    return {
        type: GET_TODOS_REQUEST,
        payload: error
    }
}


// reducer

const todoReducer = (state = initialTodoStates , action )=>{
        switch (action.type) {

            case GET_TODOS_REQUEST:
                return {
                    ... state,
                    isLoading: true
                };
        
            case GET_TODOS_SUCCESS:
                return {
                    ... state,
                    isLoading: false,
                    todos: action.payload
                };
        
            case GET_TODOS_FAILED:
                return {
                    ... state,
                    isLoading: false,
                    error: action.payload
                };
        
            default:
                return state;
        }
}

// store

const store = createStore(todoReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

