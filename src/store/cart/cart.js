import produce from "immer";

const SET_CART_ITEMS = "cart/set_cart_items";

export const setCartItems = (payload) => ({
	type: SET_CART_ITEMS,
	payload,
});

const cartState = {
	items: {},
};

export const cartReducer = (state = cartState, action) => {
	switch (action.type) {
		case SET_CART_ITEMS:
			return produce(state, (draft) => {
				draft.items = action.payload;
			});
		default:
			return state;
	}
};
