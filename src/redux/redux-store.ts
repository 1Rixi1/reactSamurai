import { combineReducers, createStore, Store } from "redux";
import { profileReducer } from "./reducers/profile-reducer";
import { dialogsReducer } from "./reducers/dialogs-reducer";

export type RootReducerType = ReturnType<typeof rootReducers>;

const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store: Store<RootReducerType> = createStore(rootReducers);
