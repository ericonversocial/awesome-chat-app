import React from 'react'
import DeleteChat from '../containers/DeleteChat'

class ChatCard extends React.Component {

  render() {

    const style_chatCard = {
      backgroundColor: this.props.activeChat === this.props.id ? '#EAEEEE' : '#FFFFFF',
      padding: '15px',
      position: 'relative',
      overflow: 'auto',
    }

    const style_selectedChatCard = {
      width: 'calc(100% - 20px)',
      background: 'none',
      border: 'none', 
      padding: '0',
      font: 'inherit',
      color: 'black',
      fontSize: '16px',
      cursor: 'pointer',
      textAlign: 'center',
    }

    return (
      <div className="ChatCard" style={style_chatCard}>
        <button className="selectedChatCard" 
                id={this.props.id}
                onClick={this.props.onClick}
                style={style_selectedChatCard}>
          {this.props.lastMessage}
        </button>
        <DeleteChat id={this.props.id}/>
      </div>
    );
  }
}

export default ChatCard