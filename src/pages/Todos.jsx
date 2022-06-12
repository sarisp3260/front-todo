import React, {useState, useEffect, useContext} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Modal from '../components/Modal';
import Task from '../components/Task';
import {TaskContext} from '../context/TaskContext';

const Todo = () => {

    const {state: {tasks},dispatch} = useContext(TaskContext)
    console.log("Global: ",tasks)

    const [modal, setModal] = useState(false)


  return (
    <>
    <div className='mt-3 w-10/12 h-9/12 rounded-sm'>

      <div className='flex justify-between items-center'>
        
        <button onClick={() => setModal(true)} className='bg-slate-800 text-white py-2 px-3 rounded-lg hover:bg-slate-700'>
          Create new task
        </button>

      </div>
      
      <div className='w-full grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 lg:grid-cols-3'>
        {tasks.map(task => (
          <Task task={task} key={task._id}/>
        ))}
      </div>
    </div>
    
    
    
        <Modal modal={modal} setModal={setModal}>
          <Form modal={modal} setModal={setModal}/>
        </Modal>
    </>
  )
}

export default Todo