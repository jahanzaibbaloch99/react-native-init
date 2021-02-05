import { combineReducers, createStore } from "redux";

// Import your reducers here
import HelloWorldReducer from "./Reducers/HelloWorld";


// Add them into combined reducers list
const combinedReducers = combineReducers({
	HelloWorldReducer
});

const rootReducer = (state, action) => {
	return combinedReducers(state, action);
}

const store = createStore(rootReducer);

export default store;