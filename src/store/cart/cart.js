import produce from "immer";

const SET_CART_ITEMS = "cart/set_cart_items";
const SET_QUANTITY = "cart/set_quantity";
const DELETE_ITEM = "cart/delete_item";
const CLEAR_CART = "cart/clear_cart";
const ADD_ITEM = "cart/add_item";

export const setCartItems = (payload) => ({
	type: SET_CART_ITEMS,
	payload,
});

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});

export const clearCart = (payload) => ({
	type: CLEAR_CART,
	payload,
});

export const setQuantity = (payload) => ({
	type: SET_QUANTITY,
	payload,
});

export const delteItem = (payload) => ({
	type: DELETE_ITEM,
	payload,
});

const cartState = {
	items: {},
	totalQty: 0,
};

export const cartReducer = (state = cartState, action) => {
	switch (action.type) {
		case SET_CART_ITEMS:
			return produce(state, (draft) => {
				draft.items = action.payload;
			});
		case SET_QUANTITY:
			return produce(state, (draft) => {
				draft.items[action.payload.id].qty += action.payload.one;
			});
		case DELETE_ITEM:
			return produce(state, (draft) => {
				draft.items[action.payload].qty = 0;
			});
		case ADD_ITEM:
			return produce(state, (draft) => {
				draft.items[action.payload.id] = action.payload;
			});
		case CLEAR_CART:
			return cartState;
		default:
			return state;
	}
};
