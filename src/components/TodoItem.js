import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const getStyle = () => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }
    const { id, title } = props.todo
  return (
      <div style={ getStyle() }>
          <p>
            <input type='checkbox' onChange={props.doneTodo.bind(this, id)}/>
            { title }
            <button style={bntStyle} onClick={props.deleteTodo.bind(this, id)}>X</button>
          </p>
      </div>
  );
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//Delete button style
const bntStyle = {
    background: '#ff0000',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;
