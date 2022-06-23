import { createStore } from "redux";
import { addReducer } from "../reducer/todoReducer";
export const store = createStore(addReducer)

// store.dispatch(action)

// addReducer(preStore,action)