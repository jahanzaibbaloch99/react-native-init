import { SET_FCM_TOKEN } from "../types";

const initialState = {
	fcmToken: null,
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_FCM_TOKEN:
			// console.log('Reducer', state, action);
			return {
				...state,
				fcmToken: action.payload,
			};
			break;
		default:
			return state;

	}

};

export default reducer;