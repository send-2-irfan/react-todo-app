import React from 'react'

function TodoList({todos, setTodos, setEditTodo}) {
    const handleComplete = (todo) => {
        setTodos(todos.map((el) => {
            if(el.id === todo.id) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        }))
    } 
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((el) => el.id !== id))
        console.log('hi')
    }
  return (
    <div>
        {
            todos.map((todo) => (
                <div className='list-item' key={todo.id}>
                    <input 
                        type='text'
                        value={todo.title} 
                        className="list" 
                        onChange={(e) => e.preventDefault()} 
                        required
                        />
                    
                    <button className='button-complete' onClick={() => handleComplete(todo)}><i className='fa fa-check-circle'></i></button>
                    <button className='button-edit' onClick={()=>handleEdit(todo)}><i className='fa fa-edit'></i></button>
                    <button className='button-delete' onClick={()=> handleDelete(todo)}><i className='fa fa-trash'></i></button>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList