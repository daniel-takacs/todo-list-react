import React from 'react';


export default function Todo({ text, setTodos, todo, todos }) {

    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.key !== todo.key))
    };

    return (
        <div className="todo-list">
            <li className="todo-item">{text}</li>
            
            <button><i class="fas fa-check-circle"></i>

</button>
            <button onClick={deleteHandler}><i class="fas fa-minus-circle"></i>

</button>
           
        </div>
    )
}
