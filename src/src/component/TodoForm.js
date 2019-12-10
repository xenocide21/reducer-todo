import React, { useState, useReducer } from 'react'
import { todoReducer, initialState } from '../reducers/todoReducer'

const TodoForm = () => {
    const [newItem, setNewItem] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleChange = e => {
        setNewItem(e.target.value)
    }

    return (
        <div className='todo-form'>
            {state.todos.map(todo => {
                return <div className='todo-item'>
                    <p className={todo.complete ? 'todo-complete' : '')}>{todo.item}</p>
                    <button onClick={
                        () => { dispatch({type: 'TOGGLE_COMPLETE', payload: todo.id})}
                    }>Complete</button>
                </div>
            })}

            <input className='todo-input' type='text' name='newItem' value={newItem} onChange={handleChange}/>
            <button onClick={()=>{dispatch({type: 'ADD_TODO', payloadL newItem})}}>Add New Todo</button>
            <button onClick={()=>{dispatch({type: 'CLEAR_COMPLETE'})}}>Clear Completed Todo</button>
        </div>
    )
}
export default TodoForm