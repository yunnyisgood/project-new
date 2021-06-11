import React from 'react'
import {TodosMenu as Menu} from '../common'

const Todos = ({children}) => (
    <>
    <h1>Todos</h1>
    <Menu/>
    {children}
    </>
)
export default Todos