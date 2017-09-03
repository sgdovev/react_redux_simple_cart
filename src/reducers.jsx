import {ADD_ITEM, REMOVE_ITEM} from "./actions";

/**
 * supply the default data for the store
 */
const defaultState = require('./cart.json');

/**
 * Reducer for store items actions. Add or remove from a specified item quantity
 * @param state
 * @param action
 * @returns {*}
 */
export function acmeStore(state = defaultState, action) {
	switch(action.type) {
		case ADD_ITEM:
			return Object.assign({}, state, {
				items: state.items.map((item, index) => {
					if(state.items[index].id === action.item.id) {
						return Object.assign({}, item, {
							quantity: item.quantity + 1
						})
					}
					return item
				})
			});
		case REMOVE_ITEM:
			return Object.assign({}, state, {
				items: state.items.map((item, index) => {
					if(state.items[index].id === action.item.id) {
						return Object.assign({}, item, {
							quantity: item.quantity >= 1 ? item.quantity - 1 : 0
						})
					}
					return item
				})
			});
		default:
			return state;
	}
}
