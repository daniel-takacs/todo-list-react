import React from 'react';

export default function Todo({ text, setTodos, todo, todos }) {
    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.key !== todo.key))
    };
    const completeHandler = ()=> {
        setTodos(todos.map((item => {
          if(item.key === todo.key) {
              return {
                  ...item, completed: !item.completed
              }
            }
          return item;
        })
        )
      )}
    return (
        <div className="todo-list">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}><i class="fas fa-check-circle"></i></button>
            <button onClick={deleteHandler}><i class="fas fa-minus-circle"></i></button>
        </div>
    )
}
