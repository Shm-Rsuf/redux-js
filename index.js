const redux = require("redux");
const createStore = redux.createStore;

const BUY_PASTA = "BUY_PASTA";
function buyPasta() {
  return {
    type: BUY_PASTA,
    quantity: 10,
  };
}

const initialState = {
  numOfPasta: 20,
  numOfPizza: 40,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTA:
      return { ...state, numOfPasta: state.numOfPasta - 1 };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store.getState());

const unsubcribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(buyPasta());
unsubcribe();
