import {
  ADD_CHAT,
  DELETE_CHAT,
  REPLY_MESSAGE,
  RESET_ACTIVE_CHAT,
  SEND_MESSAGE,
  SET_ACTIVE_CHAT,
  UPDATE_LAST_INPUT,
  UPDATE_LAST_MESSAGE,
  WELCOME_MESSAGE
} from '../constants/ActionTypes';


export const timeNow = new Date();
export var newTime = null;
export var sendTime = null;
export var replyTime = null;
const initialState = {
  activeChat: 0,
  chatList: 
  [
    {
      id: 0,
      messageList: 
      [
        { 
          id: 0,
          time: timeNow,
          message: WELCOME_MESSAGE,
          fromUser: false,
        }
      ],
      lastMessage: WELCOME_MESSAGE,
      lastInput: ''
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      newTime = new Date();
      return {
        activeChat: action.id,
        chatList:
        [
          ...state.chatList, 
          {
            id: action.id,
            messageList: 
              [
                { 
                  id: 0,
                  time: newTime,
                  message: WELCOME_MESSAGE,
                  fromUser: false
                }
              ],
            lastMessage: WELCOME_MESSAGE,
            lastInput: ''
          }
        ]
      }

    case DELETE_CHAT:
      return {
        ...state,
        chatList:
          state.chatList.filter(( chat ) => chat.id !== action.id)
      }

    case SEND_MESSAGE: {
      sendTime = action.time;
      let chat = state.chatList.find((chat) => chat.id === action.id);
      const nextId = chat.messageList[chat.messageList.length-1].id + 1;
      const newMessage = {
        id: nextId,
        time: action.time,
        message: action.message,
        fromUser: true
      }
      const newMessageList = chat.messageList.concat(newMessage);
      chat.messageList = newMessageList
      const newChatList = state.chatList.filter((c) => c.id !== chat.id);
      return {
        ...state,
        chatList:
          [
            chat,
            ...newChatList
          ]
      }
    }

    case REPLY_MESSAGE: {
      let repliedChat = state.chatList.find((chat) => chat.id === action.id);
      const nextId = repliedChat.messageList[repliedChat.messageList.length-1].id + 1;
      const newMessage = {
        id: nextId,
        time: action.time,
        message: action.message,
        fromUser: false
      }
      const newMessageList = repliedChat.messageList.concat(newMessage);
      repliedChat.messageList = newMessageList
      const newChatList = state.chatList.filter((c) => c.id !== repliedChat.id);
      return {
        ...state,
        chatList:
          [
            repliedChat,
            ...newChatList,
          ]
      }
    }

    case RESET_ACTIVE_CHAT: {
      const thisChatIndex = state.chatList.findIndex(c => c.id === action.id);
      let newActiveChat;
      if (state.chatList[thisChatIndex + 1]) {
        newActiveChat = state.chatList[thisChatIndex + 1].id
      } else if (state.chatList[thisChatIndex - 1]) {
        newActiveChat = state.chatList[thisChatIndex - 1].id
      } else {
        newActiveChat = 0
      }
      return {
        ...state,
        activeChat: newActiveChat
      }
    }

    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.id
      }

    case UPDATE_LAST_INPUT: {
      let theChat = state.chatList.find((chat) => chat.id === action.id);
      theChat.lastInput = action.text;
      const newChatList = state.chatList.filter((c) => c.id !== action.id);
      return {
        ...state,
        chatList: 
        [
          theChat,
          ...newChatList
        ]
      }
    }

    case UPDATE_LAST_MESSAGE:
      let theChat = state.chatList.find((chat) => chat.id === action.id);
      const theMessage = theChat.messageList[theChat.messageList.length-1];
      const theText = theMessage.message;
      theChat.lastMessage = theText;
      const newChatList = state.chatList.filter((c) => c.id !== theChat.id);
      return {
        ...state,
        chatList:
        [
          theChat,
          ...newChatList
        ]
      }

    default: 
      return state
  }
}