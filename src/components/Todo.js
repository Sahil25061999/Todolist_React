import React from 'react';

const Todo = ({ text, setTodo, todo, item }) => {
  const completeHandler = () => {
    setTodo(
      todo.map((ele) => {
        if (ele.id === item.id) {
          return { ...ele, completed: !ele.completed };
        }
        return ele;
      })
    );
  };
  const deleteHandler = () => {
    setTodo(
      todo.filter((ele) => {
        return ele.id !== item.id;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
