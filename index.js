const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
``;
// Constants
const GET_TODOS_REQUEST = "TODOS_REQUEST";
const GET_TODOS_SUCCESS = "TODOS_SUCCESS";
const GET_TODOS_FAILED = "TODOS_FAILED";

// Initial State
const initialToDosState = {
  toDos: [],
  isLoading: false,
  error: null,
};

// Actions
const getToDosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getToDosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};
const getToDosSuccess = (toDos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: toDos,
  };
};

// Todo's Reducer.
const toDosReducer = (state = initialToDosState, action) => {
  switch (action.key) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        toDos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getToDosRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const allTodo = res.data;
        const titles = allTodo.map((todo) => todo.title);
        dispatch(getToDosSuccess(titles));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getToDosFailed(errorMessage));
      });
  };
};

const store = createStore(toDosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
