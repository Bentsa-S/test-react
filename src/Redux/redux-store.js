import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import videosReducer from "./videosReducer";

//state как обьект, параметры состояния, редакс создаст обьект состояния как был state, у него будут свойства и методы, которые мы передадим
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    videosPage: videosReducer
});

let store = createStore(reducers);

export default store;