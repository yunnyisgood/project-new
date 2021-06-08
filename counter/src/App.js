import React from 'react'
import { Counter, Todo } from 'components/index'
import {Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Counter}></Route>
      <Route exact path='/todo' component={Todo}></Route>
    </div>
  );
}


export default App;
