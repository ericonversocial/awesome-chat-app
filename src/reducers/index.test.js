import reducer, { timeNow, newTime, sendTime, replyTime } from './index'
import * as types from '../constants/ActionTypes'


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
          message: types.WELCOME_MESSAGE,
          fromUser: false,
        }
      ],
      lastMessage: types.WELCOME_MESSAGE,
      lastInput: ''
    }
  ]
};

describe('chatApp reducer', () => {
  it('should return the initial state', () => {
    let state;
    state = reducer(undefined, {});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle ADD_CHAT', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'ADD_CHAT',id:1});
    expect(state).toEqual({activeChat:1,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''},{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle DELETE_CHAT', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'DELETE_CHAT',id:0});
    expect(state).toEqual({activeChat:0,chatList:[]});
  })

  it('should handle RESET_ACTIVE_CHAT', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'RESET_ACTIVE_CHAT',id:0});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle SEND_MESSAGE', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:'test'}]}, {type:'SEND_MESSAGE',id:0,time:sendTime,message:'test'});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false},{id:1,time:sendTime,message:'test',fromUser:true}],lastMessage:'Welcome to the chat',lastInput:'test'}]});
  })

  it('should handle REPLY_MESSAGE', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false},{id:1,time:sendTime,message:'test',fromUser:true}],lastMessage:'Welcome to the chat',lastInput:'test'}]}, {type:'REPLY_MESSAGE',id:0,time:replyTime,message:'You said: test'});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false},{id:1,time:sendTime,message:'test',fromUser:true},{id:2,time:replyTime,message:'You said: test',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:'test'}]});
  })

  it('should handle RESET_ACTIVE_CHAT when there are two (or more) chats and the first one is deleted', () => {
    let state;
    state = reducer({activeChat:1,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''},{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'DELETE_CHAT',id:0});
    expect(state).toEqual({activeChat:1,chatList:[{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle RESET_ACTIVE_CHAT when there are two (or more) chats and the second (active) one is deleted', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''},{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'DELETE_CHAT',id:1});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle RESET_ACTIVE_CHAT when there is exactly one chat and it is deleted', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'RESET_ACTIVE_CHAT',id:0});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle SET_ACTIVE_CHAT', () => {
    let state;
    state = reducer({activeChat:1,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''},{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'SET_ACTIVE_CHAT',id:0});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''},{id:1,messageList:[{id:0,time:newTime,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]});
  })

  it('should handle UPDATE_LAST_INPUT', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:''}]}, {type:'UPDATE_LAST_INPUT',id:0,text:'e'});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false}],lastMessage:'Welcome to the chat',lastInput:'e'}]});
  })

  it('should handle UPDATE_LAST_MESSAGE', () => {
    let state;
    state = reducer({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false},{id:1,time:sendTime,message:'test',fromUser:true},{id:2,time:replyTime,message:'You said: test',fromUser:false}],lastMessage:'You said: test',lastInput:''}]}, {type:'UPDATE_LAST_MESSAGE',id:0});
    expect(state).toEqual({activeChat:0,chatList:[{id:0,messageList:[{id:0,time:timeNow,message:'Welcome to the chat',fromUser:false},{id:1,time:sendTime,message:'test',fromUser:true},{id:2,time:replyTime,message:'You said: test',fromUser:false}],lastMessage:'You said: test',lastInput:''}]});
  })
})
