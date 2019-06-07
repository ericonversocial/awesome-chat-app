import React from 'react'

class Header extends React.Component {

  render() {

    const style_header = {
      border: '1px solid black',
      borderBottom: '0',
    }

    const style_headline = {
      textAlign: 'center',
    };

    const style_addChatButton = {
      border: '1px solid #555555',
      padding: '10px 24px',
      borderRadius: '12px',
      margin: '0px 0px 10px 10px',
      fontSize: '16px',
      cursor: 'pointer',
    };

    return (
      <div className="Header" style={style_header}>
        <div className="Headline" style={style_headline}>
          <h1>{this.props.title}</h1>
        </div>
        <div className="Button">
          <button style={style_addChatButton} onClick={this.props.onClick}> 
            Add chat
          </button>
        </div>
      </div>
    );
  }
}

export default Header