const { combineReducers, createStore } = require("redux");
const { cartReducer } = require("./cart/cart");

const rootReducer = combineReducers({
	cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
