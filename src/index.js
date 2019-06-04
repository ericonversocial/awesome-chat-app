import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addChat } from './actions'
import rootReducer from './reducers'
import History from './containers/ChatHistory'
import Chat from './containers/RenderChat'
import './index.js'
import './index.css'


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Header extends React.Component {

  addChat() {
    store.dispatch(addChat());
  }

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
          <button style={style_addChatButton} onClick={this.addChat}> 
            Add chat
          </button>
        </div>
      </div>
    );
  }
}

class SplitPane extends React.Component {

  render() {

    const style_splitPanel = {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      border: '1px solid silver',
      overflow: 'hidden',
      borderTop: '0',
    };

    const style_splitPaneLeft = {
      border: '1px solid #555555',
      flex: 'auto',
      padding: '10px',
      width: '30%',
      minHeight: '500px',
      minWidth: '150px',
      borderRight: '0',
    }

    const style_splitPaneRight = {
      border: '1px solid #555555',
      flex: 'auto',
      padding: '10px',
      width: '70%',
      minHeight: 'auto',
      minWidth: '1024px',
      position: 'relative',
      overflow:'auto',
    }

    return (
      <div className="SplitPane" style={style_splitPanel}>
        <div className="SplitPane-left" style={style_splitPaneLeft}>
          {this.props.left}
        </div>
        <div className="SplitPane-right" style={style_splitPaneRight}>
          {this.props.right}
        </div>
      </div>
    );
  }
}

class Wireframe extends React.Component {

  render() {

    const style_wireframe = {
      height: '100%',
      minHeight: '100%',
      overflow: 'hidden',
    }

    return (
      <div className="Wireframe" style={style_wireframe}>
        <Header title="An awesome chat app"></Header>
        <SplitPane
            left={
              <History />
            }
            right={
              <Chat />
            }
          />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Wireframe />
  </Provider>,
  document.getElementById('root')
);
