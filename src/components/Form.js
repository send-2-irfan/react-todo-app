import React, { useEffect } from 'react'
import { v4 as uuidV4 } from 'uuid';

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo}) {
    const onInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
            )
        
        setTodos(newTodo);
        setEditTodo(null);
    }
    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    }, [setInput, editTodo])
    
     
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([
                ...todos,
                {
                    title: input,
                    completed: false,
                    id: uuidV4()
                }
            ])
            setInput('');
        } else {
            updateTodo(input , editTodo.id, editTodo.completed);
        }
        
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input 
                type='text' 
                placeholder='Add a todo...'
                className='task-input' 
                value={input}
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form