import React from 'react'
import {Login, Signup, UserDetail, UserEdit, UserList} from 'user'
import {Schedule} from 'todos'
import {Home, User, Counter} from 'templates'
import {Nav} from 'common'
import { Redirect, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {todoReducer} from 'store'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Todos} from 'templates/Todos'

const rootReducer = combineReducers({todoReducer})

const App = () => {
  return (<div>
    <Router>
      <Provider store = {createStore(rootReducer)}>
        <Schedule/>
    <Route exact path='/todos' component={Schedule}/>
        
      <Nav/>
    <Route exact path='/home' components={Home}/>
    <Redirect exact from ={'/'} to={'/home'}/>
    <Route exact path='/counter' component={Counter}/>
    <Route exact path='/user' component={User}/>

    <Route exact path='/login-form' component={Login}/>
    <Route exact path='/signup-form' component={Signup}/>
    <Route exact path='/user-detail' component={UserDetail}/>
    <Route exact path='/user-edit' component={UserEdit}/>
    <Route exact path='/uesr-list' component={UserList}/>


    </Provider>
    </Router>
  </div>)
}


export default App