import { combineReducers } from "redux";
import LogReducer from './logReducer'
import techReducer from "./techReducer";

export default combineReducers({
    log: LogReducer,
    tech: techReducer
})