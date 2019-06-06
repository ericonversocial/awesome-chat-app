import { connect } from 'react-redux'
import { sendMessage, replyMessage, updateLastInput, updateLastMessage } from '../actions'
import Chat from '../components/Chat'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (id, time, message) => dispatch(sendMessage(id, time, message)),
    replyMessage: (id, time, message) => dispatch(replyMessage(id, time, message)),
    updateLastMessage: (id) => dispatch(updateLastMessage(id)),
    updateLastInput: (id, text) => dispatch(updateLastInput(id, text))
  }
}

const mergeProps = (propsFromState, propsFromDispatch) => {

  const activeChat = propsFromState.chatList.find((chat) => chat.id === propsFromState.activeChat)

  return {
    onEnter: (e) => {
      if (activeChat && e.keyCode === 13 && e.shiftKey === false && e.target.value !== '') {
        propsFromDispatch.sendMessage(propsFromState.activeChat, new Date(), e.target.value)
        propsFromDispatch.replyMessage(propsFromState.activeChat, new Date(), 'You said: ' + e.target.value)
        propsFromDispatch.updateLastMessage(propsFromState.activeChat)
        propsFromDispatch.updateLastInput(propsFromState.activeChat, '')
      }
    },
    handleChange: (e) => {
      if (activeChat) {
        propsFromDispatch.updateLastInput(propsFromState.activeChat, e.target.value.replace('\n', ''))
      }
    },
    messageList: activeChat ? activeChat.messageList : [],
    lastInput: activeChat ? activeChat.lastInput : ''
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Chat)
