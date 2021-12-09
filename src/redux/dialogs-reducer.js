const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    { id: 1, message: "qwerty" },
    { id: 2, message: "qwerty2" },
    { id: 3, message: "qwerty3" },
    { id: 4, message: "qwerty4" },
  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sveta" },
  ],
    newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state}
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages]
      let body = stateCopy.newMessageBody;
      stateCopy.messages.push({ id: 5, message: body });
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
      
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};
export default dialogsReducer;
