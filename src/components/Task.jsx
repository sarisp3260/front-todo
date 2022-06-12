import React, { useContext, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { TaskContext } from '../context/TaskContext'
import { deleteTask, updateCompleted } from '../utils/task'
import EditForm from './EditForm'
import Modal from './Modal'

const Task = ({task}) => {

  const {dispatch} = useContext(TaskContext)

  const [edit, setEdit] = useState(false)

  const [deleteNote, setDeleteNote] = useState(false)

  const [completed, setCompleted] = useState(false)


  const handleDelete = async (id) => {

    console.log(id)

    const resp = await deleteTask(id)
    if(resp.status !== 200){
      console.log('error')
      return
    }
    dispatch({
      type: 'DELETE_TASK', 
      payload: id
    })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-between bg-white rounded-lg w-full drop-shadow-xl'>
      <div className="text flex items-center gap-3 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 rounded-lg p-4 max-h-16 drop-shadow-2xl" >
        <span className="font-mono overflow-hidden">{task.title}</span>
      </div>
      <div className="icons w-full flex items-center justify-between gap-3 text-2xl p-4">

        
        <div className='w-full flex justify-between items-center gap-3'>

          <FaRegEdit 
          onClick={() => setEdit(true)}
          className="w-6 h-6 hover:text-purple-500"
          />
          <MdDeleteForever 
          className="w-6 h-6 hover:text-red-500" 
          onClick={() => setDeleteNote(true)}
          />
        </div>
      </div>
    </div>

    <Modal modal={edit} setModal={setEdit}>
      <EditForm edit={edit} setEdit={setEdit} task={task}/>
    </Modal>

    <Modal modal={deleteNote} setModal={setDeleteNote}>
      <div className='px-5'>
        <h1 className='text-center mb-10 text-4xl'>Are you sure you want to delete this task?</h1>
        
        <div className='w-full flex flex-wrap justify-between items-center'>
          <button onClick={() => handleDelete(task._id)} className="bg-red-500 hover:bg-red-700 text-xl text-white py-2 px-3 rounded-lg">Delete</button>
          <button onClick={() => setDeleteNote(false)} className="bg-gray-500 hover:bg-gray-700 text-xl text-white py-2 px-3 rounded-lg">Cancel</button>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default Task