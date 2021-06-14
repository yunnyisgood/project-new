import React from 'react'
import {TodosInput, TodosList} from '../components'
import {store} from '../store'
import {Provider} from 'react-redux'

 const Schedule = () => {
     return (<>
     <Provider store={store}>
         <TodosInput/>
         <TodosList/>
     </Provider>
     </>)
 }
 export default Schedule