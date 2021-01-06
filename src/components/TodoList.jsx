import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, setTodos}) {
    return (
        <div>
            <ul>{todos.map(todo => (
                <Todo 
                todo={todo} 
                todos={todos} 
                key={todo.key} 
                text={todo.text} 
                setTodos={setTodos}/>
            ))}</ul>
        </div>
    )
}
