import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTodoAction, deleteTodoAction} from '../store/todo.reducer'
 
const TodoList = () => {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))
    return(<>
    <div className="col-sm-2">
        <input type ="checkbox" checked={todo.complete} onChange={toggleTodo.bind(null, todo.id)}/>
        {todo.complete
        ? <span style = {{textDecoration:"line-through"}}>{todo.name}</span>
        : <span>{todo.name}</span>
        }
        <button onClick={deleteTodo.bind(null, todo.id)}>X</button>
    </div>
    </>)
}
export default TodoList