import React from 'react'
import SentMessage from './SentMessage'
import RepliedMessage from './RepliedMessage'
import { TEXTAREA_PLACEHOLDER } from '../constants/ActionTypes'


class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    var el = this.refs.message;
    el.scrollTop = el.scrollHeight;
    this.scrollToBottom();
  }

  render() {

    const style_conversation = {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
    }

    const style_message = {
      height: '500px',
      marginBottom: '20px',
      overflow: 'auto',
    }

    const style_chatBox = {
      display: 'inline-block',
      width: '50%',
      position: 'relative',
      padding: '10px',
    }

    const style_textarea = {
      width: '100%',
      padding: '1em',
      boxSizing: 'border-box',
      border: '2px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '58px',
      resize: 'none',
      outline: 'none',
      overflow: 'auto',
    }

    return (
      <div className="Conversation" style={style_conversation}>
        <div className="Message" ref="message" style={style_message}>
          {this.props.messageList.map(message => {
            if (message.fromUser) {
              return (
                <SentMessage
                  key={message.id}
                  date={message.time}
                  text={message.message}
                />
              );
            } else {
              return (
                <RepliedMessage
                  key={message.id}
                  date={message.time}
                  text={message.message}
                />
              );
            }
            }
          )}
          <div ref={(el) => { this.messagesEnd = el; }} />
        </div>
        <div className="ChatBox" style={style_chatBox}>
          <div className="Textarea">
            <textarea id="replyTextArea" type="text" autoFocus
              value={this.props.lastInput}
              placeholder={TEXTAREA_PLACEHOLDER} 
              onKeyDown={this.props.onEnter} onChange={this.props.handleChange}
              style={style_textarea}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat