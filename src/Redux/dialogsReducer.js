const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Alex1'},
        {id: 3, name: 'Alex2'},
        {id: 4, name: 'Alex3'},
        {id: 5, name: 'Alex4'},
        {id: 6, name: 'Alex5'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 1, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}


export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;