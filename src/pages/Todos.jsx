import React, {useState, useEffect} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Todo = () => {


  return (
    <div className='mt-3 w-10/12 h-9/12 rounded-sm'>

      <div className='flex justify-between items-center'>
        <Link to="/create-todo">
          <button className='bg-slate-800 text-white py-2 px-3 rounded-lg hover:bg-slate-700'>
            Create new task
          </button>
        </Link>

      
        <button className='bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700 flex justify-between items-center gap-3'>
          Delete all tasks <AiFillDelete/>
        </button>

      </div>
      
      <div className='w-full grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 lg:grid-cols-3'>

    </div>
    </div>
  )
}

export default Todo