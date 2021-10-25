import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import { TodoList } from '../../components/todo/list/TodoList'
import { TodoAdd } from '../../components/todo/add/TodoAdd'
import './TodoApp.scss'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleToggle = (todo) => {
        dispatch({ type: 'toggle', payload: todo })
    }

    const handleDelete = (todo) => {
        dispatch({ type: 'delete', payload: todo })
    }

    return (
        <div className='todo-container'>
            <h1>TodoApp ( {todos.length} ) </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        todos={todos}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
