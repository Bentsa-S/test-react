const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts:[
        {id: 1, message: 'first message', likeCount: 2},
        {id: 2, message: '2 message', likeCount: 20},
        {id: 3, message: '3 message', likeCount: 12},
        {id: 4, message: '4 message', likeCount: 22},
        {id: 5, message: 'sfdsshdfjdf message', likeCount: 5},
        {id: 6, message: '6 message', likeCount: 2}
    ],
    newPostText: 'new post text'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;







