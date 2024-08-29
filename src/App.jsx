import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'



function App() {


  return (
    <>
     <h3>
      ToDo List using Redux Toolkit
     </h3>

     <AddTodo/>

     <Todos/>



     
    </>
  )
}

export default App
