const { createStore } = require("redux");

// Products constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// Carts constants
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// Product's initial state.
const initialProductsState = {
  products: ["Pen", "Book"],
  countOfProducts: 2,
};
// Product's initial state.
const initialCartsState = {
  products: ["Salt"],
  countOfProducts: 1,
};

// Product's actions
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// Cart's actions
const getCarts = () => {
  return {
    type: GET_CART,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// Product Reducer
const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        products: [...state.products],
        countOfProducts: state.countOfProducts,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        countOfProducts: state.countOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Paper"));
