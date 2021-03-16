import { combineReducers, createStore } from "redux";

// Import your reducers here
import HelloWorldReducer from "./Reducers/HelloWorld";
import AppReducer from "./Reducers/App";


// Add them into combined reducers list
const combinedReducers = combineReducers({
	HelloWorldReducer,
	AppReducer
});

const rootReducer = (state, action) => {
	return combinedReducers(state, action);
};

const store = createStore(rootReducer);

export default store;