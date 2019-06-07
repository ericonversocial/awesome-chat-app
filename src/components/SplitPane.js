import React from 'react'

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

export default SplitPane