import { MdOutlineEditNote } from 'react-icons/md'
import { useContext,useRef} from 'react'
import { TaskContext } from '../context/TaskContext'
import { updateTask } from '../utils/task'

const EditForm = ({edit, setEdit, task}) => {

    const todoInput = useRef('')

    const {dispatch} = useContext(TaskContext)
  
    const handleSubmit = async (e) => {
      e.preventDefault()

      console.log(task)
  
      const resp = await updateTask(task, todoInput.current.value)
      if(resp.status !== 200) {
        console.log('error')
        return
      }

      location.reload(true)
    console.log(resp)
      
      setEdit(false)
    }
  return (
    <>
      <div className="top flex items-center justify-center gap-3">
        <h1 className='font-black text-4xl'>Update task</h1> 
        <MdOutlineEditNote className='text-4xl'/>
      </div>
        <p className='text-xl text-center font-medium my-5 px-5'>You make a mistake don´t worry, you can edit your task in a easy way so make sure everything is written well and continue the great experience for this page, enjoy </p>

      <form className='py-5 flex flex-col items-center gap-8 justify-center' onSubmit={handleSubmit}>
          <label htmlFor="title" className='text-2xl font-bold'>Title task</label>
          <input className='bg-white text-indigo-700 w-9/12 rounded-xl focus:ring focus:ring-indigo-500 focus:ring-offset-2 py-3 px-3 outline-none' type="text"  id='title' defaultValue={task.title} ref={todoInput} required/>
          <button className='bg-purple-700 text-white text-2xl py-1 px-3 rounded-lg hover:bg-purple-500 ' type="submit">Update task</button>
      </form>
    </>
  )
}

export default EditForm