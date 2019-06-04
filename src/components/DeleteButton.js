import React from 'react'

const style_button = {
  display: 'inline',
  fontSize: '12px',
  border: '1px solid #555555',
  position: 'absolute',
  float: 'right',
  boxShadow: '1px 2px',
  overflow: 'hidden',
  cursor: 'pointer',
}

const DeleteButton = ({ onClick }) => (
  <button onClick={onClick} style={style_button}>
    X
  </button>
)

export default DeleteButton