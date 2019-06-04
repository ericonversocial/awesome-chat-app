import React from 'react'

class WelcomeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {

    const style_welcomeMessageBubble = {
      display: 'inline-block',
      border: '1px solid #555555',
      padding: '15px',
      marginBottom: '15px'
    }

    const style_sentMessage = {
      marginTop: '6px',
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      fontSize: '16px'
    }

    return(
      <div className="WelcomeMessageBubble" style={style_welcomeMessageBubble}>
        <div className="Date">
          <span>Sent on {this.state.date.toString()}</span>
        </div>
        <div className="Message" style={style_sentMessage}>
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage