import React from 'react'
import SetActiveChat from '../containers/SetActiveChat'


class History extends React.Component {

  render() {

    const style_history = {
      height: '600px',
      overflow: 'auto',
    }

    return (
      <div className="History" style={style_history}>
        <div className="ChatList">
          {this.props.chatList.map(chat =>
            <SetActiveChat
              key={chat.id}
              id={chat.id}
              lastMessage={chat.lastMessage}
              onClick={this.props.onClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default History