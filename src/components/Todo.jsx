import React from 'react';


export default function Todo({ text, setTodos, todo, todos }) {

    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.key !== todo.key))
    };

    return (
        <div>
            <li>{text}</li>
            <button>+</button>
            <button onClick={deleteHandler}>Trush</button>
        </div>
    )
}
