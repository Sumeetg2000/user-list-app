import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import {UserReducer, pageReducer, cardReducer} from "./reducers";

const rootReducer=combineReducers({
    users:UserReducer, page:pageReducer, card:cardReducer
});

const store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store