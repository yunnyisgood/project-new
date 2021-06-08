import React, { useState } from 'react'

const Todo = () => {

    const [item, setItem] = useState(0)

    return(<>
    <h1>Todo List</h1>
    <h4>{item}</h4>
    <input onChange={ e =>  setItem(e.target.value)} />
    <button onClick={()=> setItem('')}>할일추가</button>
    </>)
}

export default Todo