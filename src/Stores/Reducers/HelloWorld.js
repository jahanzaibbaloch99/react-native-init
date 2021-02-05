import { SAY_HELLO_WORLD } from "../types";

const initialState = {
	text: null,
};

const reducer = (state = initialState, action) => {

	// console.log('Reducer', state, action);

	switch (action.type) {
		case SAY_HELLO_WORLD:
			return {
				...state,
				text: action.payload,
			}
			break;
		default:
			return state;

	}

}

export default reducer;