import React from 'react'

class SentMessage extends React.Component {

  render() {

    const style_messageBubbleGroup = {
      position: 'relative',
      overflow: 'auto',
    }

    const style_sentMessageBubble = {
      display: 'inline-block',
      backgroundColor: '#EAEEEE',
      border: '1px solid #555555',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '15px',
      float: 'right',
    }

    const style_sentMessage = {
      marginTop: '6px',
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      fontSize: '16px'
    }

    return(
      <div className="MessageBubbleGroup" style={style_messageBubbleGroup}>
        <div className="SentMessageBubble" style={style_sentMessageBubble}>
          <div className="Date">
            <span>Sent on {this.props.date.toString()}</span>
          </div>
          <div className="Message" style={style_sentMessage}>
            <span>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SentMessage