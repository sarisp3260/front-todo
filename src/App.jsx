import React, { useContext, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Todos from "./pages/Todos"
import CreateTodo from "./pages/CreateTodo"
import { TaskContext } from "./context/TaskContext"
import { getTasks } from "./utils/task"

function App() {

  const { state: { tasks }, dispatch } = useContext(TaskContext)

  const getData = async () => {
    const res = await getTasks()
    if(res.status !== 200){
      console.log('error')
      return
    }
    dispatch({ type: 'GET_TASKS', payload: res.data })
  }

  useEffect( () => {
    getData()
  },[])

  return (
    <div className="App font-plus text-slate-800 min-h-screen flex flex-col justify-between items-center bg-purple-100 backdrop-blur-3xl selection:bg-purple-400">
      <Navbar/>

      <div className="todo w-full flex justify-center items-center">
        
        <Routes>
          <Route 
          path="/" 
          element={<About/>} />

          <Route
          path='/todos'
          element={<Todos/>}/>

          <Route 
          path='/create-todo'
          element={<CreateTodo/>}/>

          <Route
          path='*'
          element={<Navigate to="/" /> }/>
        </Routes>

      </div>

      <footer className='flex items-center justify-center gap-3 flex-wrap bg-slate-800 text-white py-6 text-xl w-full'>

        <img className='w-10 rounded-full' src="https://media2.giphy.com/media/ibolLe3mOqHE3PQTtk/giphy.gif?cid=790b761176fc2d9bb416f75328dce11dc6d1b7a167ca9bf3&rid=giphy.gif&ct=g" alt="" />

        <span className='font-medium'>Todo-list.com</span>
        <span className='font-black'>&copy; All rights reserved.</span>
        
      </footer>
    </div>
  )
}

export default App
