const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialCounter = {
  counter: 0,
};

const allUserState = [{ name: "Jobayer Ahmed" }];

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementState = () => {
  return {
    type: DECREMENT,
  };
};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };

    default:
      state;
  }
};
