import React from 'react'

class RepliedMessage extends React.Component {

  render() {

    const style_messageBubbleGroup = {
      position: 'relative',
      overflow: 'auto',
    }

    const style_repliedMessageBubble = {
      display: 'inline-block',
      border: '1px solid #555555',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '15px'
    }

    const style_repliedMessage = {
      marginTop: '6px',
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      fontSize: '16px'
    }
    
    return (
      <div className="MessageBubbleGroup" style={style_messageBubbleGroup}>
        <div className="RepliedMessageBubble" style={style_repliedMessageBubble}>
          <div className="Date">
            <span>Sent on {this.props.date.toString()}</span>
          </div>
          <div className="Message" style={style_repliedMessage}>
            <span>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RepliedMessage