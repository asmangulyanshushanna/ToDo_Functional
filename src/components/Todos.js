import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
  return props.todos.map((todo, idx) => (
      <TodoItem key = {idx} 
      todo = { todo } 
      doneTodo = {props.doneTodo} 
      deleteTodo = {props.deleteTodo} />
  ));
}


//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
