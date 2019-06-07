import React from 'react'
import SplitPane from './SplitPane'
import AddChat from '../containers/AddChat'
import History from '../containers/ChatHistory'
import Chat from '../containers/RenderChat'

class Wireframe extends React.Component {

  render() {

    const style_wireframe = {
      height: '100%',
      minHeight: '100%',
      overflow: 'hidden',
    }

    return (
      <div className="Wireframe" style={style_wireframe}>
        <AddChat title="An awesome chat app"></AddChat>
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

export default Wireframe