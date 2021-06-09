import React from 'reract'
import {Schedule} from './container'
import {Route} from 'react-router-dom'

const App = () => {
  return (<>
  <Route exact path ='./' component={Schedule}></Route>
  </>)
}
export default App