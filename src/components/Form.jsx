import React from 'react';

export default function Form ({ inputText, setInputText, todos, setTodos }) {

    const inputHandler = (e)=> {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {key: Math.random(), text: inputText}]);
        setInputText("");
    }
    return(
        <form className="form-style">
            <input className="input-style"placeholder="What will you do today?"type="text"
            onChange={inputHandler}
            value={inputText}/>
            <button className="add-button"onClick={submitHandler} type="submit">Add</button>
        </form>
    );

}