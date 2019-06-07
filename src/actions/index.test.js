import * as actions from './index'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a chat', () => {
    const id = 1
    const expectedAction = {
      type: types.ADD_CHAT,
      id
    }
    expect(actions.addChat()).toEqual(expectedAction)
  })

  it('should create an action to delete a chat', () => {
    const id = 0
    const expectedAction = {
      type: types.DELETE_CHAT,
      id
    }
    expect(actions.deleteChat(id)).toEqual(expectedAction)
  })

  it('should create an action to send a message', () => {
    const id = 0
    const time = 'sample_time'
    const message = 'sample_message'
    const expectedAction = {
      type: types.SEND_MESSAGE,
      id,
      time,
      message
    }
    expect(actions.sendMessage(id, time, message)).toEqual(expectedAction)
  })

  it('should create an action to reply a message', () => {
    const id = 0
    const time = 'sample_time'
    const message = 'sample_message'
    const expectedAction = {
      type: types.REPLY_MESSAGE,
      id,
      time,
      message
    }
    expect(actions.replyMessage(id, time, message)).toEqual(expectedAction)
  })

  it('should create an action to reset the active chat', () => {
    const id = 0
    const expectedAction = {
      type: types.RESET_ACTIVE_CHAT,
      id
    }
    expect(actions.resetActiveChat(id)).toEqual(expectedAction)
  })

  it('should create an action to set the active chat', () => {
    const id = 0
    const expectedAction = {
      type: types.SET_ACTIVE_CHAT,
      id
    }
    expect(actions.setActiveChat(id)).toEqual(expectedAction)
  })

  it('should create an action to update the last user input', () => {
    const id = 0
    const text = "sample_text"
    const expectedAction = {
      type: types.UPDATE_LAST_INPUT,
      id,
      text
    }
    expect(actions.updateLastInput(id, text)).toEqual(expectedAction)
  })

  it('should create an action to update the last message of a chat', () => {
    const id = 0
    const expectedAction = {
      type: types.UPDATE_LAST_MESSAGE,
      id
    }
    expect(actions.updateLastMessage(id)).toEqual(expectedAction)
  })
})
