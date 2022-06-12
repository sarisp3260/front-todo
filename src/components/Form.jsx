import { RiCalendarTodoFill } from 'react-icons/ri'
import { useContext, useEffect, useRef, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { createTask } from '../utils/task'

const Form = ({ modal, setModal }) => {

  const todoInput = useRef('')

  const {dispatch} = useContext(TaskContext)

  //const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await createTask(todoInput.current.value)
    if(resp.status !== 200) {
      console.log('error')
      return
    }

    dispatch({type: 'ADD_TASK', payload: resp.data})
    
    setModal(false)
    todoInput.current.value = '';
  }

  return (
    <>
      <div className="top flex items-center justify-center gap-3">
        <h1 className='font-black text-4xl'>Create task</h1> 
        <RiCalendarTodoFill className='text-4xl'/>
      </div>
        <p className='text-xl text-center font-medium my-5 px-5'>Now you can create your task and organice your day, make sure that your tasks are written down and the best idea of this app is that all your task will be in one place so you won't forget anything important</p>

      <form className='py-5 flex flex-col items-center gap-8 justify-center' onSubmit={handleSubmit}>
          <label htmlFor="title" className='text-2xl font-bold'>Title task</label>
          <input className='bg-white text-indigo-700 w-9/12 rounded-xl focus:ring focus:ring-indigo-500 focus:ring-offset-2 py-3 px-3 outline-none' type="text"  id='title' ref={todoInput} required/>
          <button className='bg-purple-700 text-white text-2xl py-1 px-3 rounded-lg hover:bg-purple-500 ' type="submit">Create new task</button>
      </form>
    </>
  )
}

export default Form