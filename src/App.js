import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);
  const [filteredtodo, setFilteredtodo] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(() => getLocal(), []);

  useEffect(() => {
    changeList();
    saveLocal();
  }, [todo, status]);

  const changeList = () => {
    switch (status) {
      case 'incomplete':
        setFilteredtodo(todo.filter((items) => items.completed === false));
        break;
      case 'completed':
        setFilteredtodo(todo.filter((items) => items.completed === true));
        break;
      default:
        setFilteredtodo(todo);
    }
  };

  const saveLocal = () => {
    localStorage.setItem('todo', JSON.stringify(todo));
  };

  const getLocal = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todo'));
      setTodo(todoFromLocal);
    }
  };

  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setStatus={setStatus}
      />
      <TodoList todo={todo} setTodo={setTodo} filteredtodo={filteredtodo} />
    </div>
  );
}

export default App;
