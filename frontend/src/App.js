import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components';
import Counter from './counter/Counter'
import Login from './user/Login'
import Signup from './user/SignUp'
import UserDetail from './user/UserDetail'
import UserEdit from './user/UserEdit'
import UserList from './user/UserList'



const App = () => {
  return (<>
    <UserList/>
  </>)
}


export default App