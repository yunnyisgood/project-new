import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggleTodoAction, deleteTodoAction } from '../store/todo.reducer'

const TodosList = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const tolggleTodo = id => dispatch(toggleTodoAction(id))
    const delteTodo = id = dispatch(deleteTodoAction(id))

    retrun (<>
    {todos.lenght === 0 && (<p className="alert alert-info">등록된 할일이 없습니다</p>)}
    {todos.lenght !==0 && todos.map(todo => (<div key={todo.id} className="todods">
        <div className="col">
            <input type="checkbox" checked={todo.complete} onChange={tolggleTodo.bind(null, todo.id)} />
            {todo.complete
            ? <span style={{textDecoration:"line-through"}}>{todo.name}</span>
            : <span>{todo.name}</span>
            }
            <button onClick={delteTodo.bind(null, todo.id)}>X</button>   
        </div>
    </div>))}
    </>)
}
export default TodosList


