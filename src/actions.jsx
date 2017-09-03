export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

/**
 * action to add to quantity of the specified item
 * @param item
 * @returns {{type: string, item: *}}
 */
export function addItem(item) {
	return {
		type: ADD_ITEM,
		item
	}
}

/**
 * action to remove one from the quantity of the specified item
 * @param item
 * @returns {{type: string, item: *}}
 */
export function removeItem(item) {
	return {
		type: REMOVE_ITEM,
		item
	}
}
