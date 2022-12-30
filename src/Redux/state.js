// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
// import usersReducer from "./usersReducer";
// import videosReducer from "./videosReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "first post", likesCount: 12},
//                 {id: 2, message: "second post", likesCount: 1},
//                 {id: 3, message: "third post", likesCount: 22},
//                 {id: 4, message: "fourth post", likesCount: 2},
//                 {id: 5, message: "fives post", likesCount: 122},
//                 {id: 6, message: "six post", likesCount: 12},
//             ],
//             newPostText: 'new post text'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Alex"},
//                 {id: 2, name: "User1"},
//                 {id: 3, name: "User2"},
//                 {id: 4, name: "User3"},
//                 {id: 5, name: "User4"},
//             ],
//             messages: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "Hello"},
//                 {id: 3, message: "How are you?"},
//                 {id: 4, message: "Привет"},
//                 {id: 5, message: "Hi!"},
//                 {id: 6, message: "Hi!"},
//             ],
//             newMessageBody: "",
//         },
//         usersPage: {},
//         videosPage: {}
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.usersPage = usersReducer(this._state.dialogsPage, action);
//         this._state.videosPage = videosReducer(this._state.videosPage, action);
//         this._callSubscriber(this._state);
//     }
// }
//
// window.state = store;
// export default store;