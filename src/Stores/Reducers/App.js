import { SET_ISLOADING } from "../types";

const initialState = {
	isLoading: true,
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_ISLOADING:
			return {
				...state,
				isLoading: action.payload,
			};
			break;
		default:
			return state;
	}

};

export default reducer;