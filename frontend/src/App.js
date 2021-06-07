import React from 'react'
import { Route} from "react-router-dom"
import styled from 'styled-components';
import {Counter} from './counter/index'
import {Login, Signup, UserDetail, UserEdit, UserList} from './user/index'
import {Home} from './common/index'



const App = () => {
  return (<div>
    <Route exact path='/' components={Home}/>
    <Route exact path='/counter' components={Counter}/>
    <Route exact path='/login' components={Login}/>
    <Route exact path='/signup' components={Signup}/>
    <Route exact path='/user-detail' components={UserDetail}/>
    <Route exact path='/user-edit' components={UserEdit}/>
    <Route exact path='/uesr-list' components={UserList}/>
  </div>)
}


export default App