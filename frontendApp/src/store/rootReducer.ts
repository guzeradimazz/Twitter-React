import { combineReducers } from "redux";
import { twitsReducer } from "./ducs/twits/reducer";

export const rootReducer  = combineReducers({
    twits:twitsReducer
})