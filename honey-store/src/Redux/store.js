import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { loginReducer } from "./reducer";

export const store = createStore(loginReducer, applyMiddleware(thunk));
