import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo, setTodo, filteredtodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredtodo.map((item) => {
          return (
            <Todo
              key={item.id}
              text={item.text}
              setTodo={setTodo}
              todo={todo}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
