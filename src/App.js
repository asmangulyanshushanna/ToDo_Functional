import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { async } from 'q';

function App() {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );
      setTodo(result.data);
    };
    fetchData();
  }, []);


  const doneTodo = (id) => {
    const updateTodo = todos.map(todo => {
      if (todo.id === id){
      return {...todo, completed: !todo.completed}
    }
    return todo
  })
    setTodo(updateTodo)
  }

  const addTodo = (e) => {
    e.preventDefault()
    const result = async () => {
      axios.post(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
      {
        title : e.target.elements.title.value,
        completed: false
      }
    )
    const newTodos = [...todos, result.data]
    await setTodo(newTodos)
  }

    const form = document.getElementById("myForm");
    form.reset();
  }

  const deleteTodo = (id) => {
    const removeTodo = [...todos.filter(todo => todo.id !== id)]
    setTodo(removeTodo)
  }
  return (
    <Router>
      <div className="App">
        <Header/>
          <Route exact path = '/' render = {
            props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo}/>
                <Todos todos = {todos} 
                doneTodo = {doneTodo}
                deleteTodo = {deleteTodo}
                />
              </React.Fragment>
            )
          }
          />
          <Route path = '/about' component = { About } />
      </div>
    </Router>
  );
}

export default App;
