import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import {} from '../store/index'
import { addTodoAction } from 'store/todo.reducer'

const TodosInput = () => {

    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()


    const submitForm = e => {
        e.preventDefault()
        console.log(`uuidv4: ${uuidv4()}`)
        const newTodo = {
            id: uuidv4(),
            name : todo,
            complete:false
        }
        addTodo(newTodo) // => dispatch(newTodo)로 받는 것과 동일?
        setTodo('')

    }

    const addTodo = todo => dispatch(addTodoAction(todo))

    const handelChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    retrun (<>
    <form onSubmit={submitForm} method="POST">
        <div className="todos">
            <div className="col">
                <input type="text" placeholder="입력하세요" name="todo" className="form-control" value={todo} onChange={handelChange}/>
            </div>
        </div>
        </form></>)
}
export default TodosInput