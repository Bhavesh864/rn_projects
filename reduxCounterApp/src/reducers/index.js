import { combineReducers } from "redux";
import HelloReducer from "./helloReducer";
import CounterReducer from "./counterReducer";

export default combineReducers({
    counter: CounterReducer,
    hello: HelloReducer
});