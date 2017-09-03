export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOTAL = 'TOTAL';

export function addItem(item) {
	return {
		type: ADD_ITEM,
		item
	}
}

export function removeItem(item) {
	return {
		type: REMOVE_ITEM,
		item
	}
}

export function subtotal(items) {
	return {
		type: TOTAL,
		items
	}
}
