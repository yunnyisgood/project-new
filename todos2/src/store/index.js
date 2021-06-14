import {createStore} from 'react'
import todoReducer from './todo.reducer'

export const store = createStore(todoReducer)