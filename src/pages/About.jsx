import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    
    <div className='grid w-full gap-10 justify-items-center'>
      <div className='h-full w-10/12 flex flex-col md:flex-row gap-5'>
        <div className='w-2/3'>
            <h1 className='text-5xl text-indigo-800  font-bold'>¿What is Todo List?</h1>
            <p className='text-lg text-slate-900 font-medium px-5 mt-5'>Do you often feel overwhelmed by the amount of work you have to do? Do you find yourself missing deadlines? Or do you sometimes just forget to do something important, so that people have to chase you to get work done?</p>
            <p className='text-lg text-slate-900 font-medium px-5 mt-5'>All of these are symptoms of not keeping a proper "To-Do List." These are prioritized lists of all the tasks that you need to carry out. They list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.</p>
            <p className='text-lg text-slate-900 font-medium px-5 mt-5'>By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important. And by prioritizing tasks, you plan the order in which you'll do them, so that you can tell what needs your immediate attention, and what you can leave until later.</p>
        </div>

        <div className='w-1/3 bg-white/90 py-5 px-10 text-center flex flex-col items-center justify-center gap-5 rounded-xl backdrop-blur-lg shadow-xl'>
          <span className='text-5xl text-indigo-800  font-bold'>¿How works?</span>
          <p className='text-lg text-slate-900  font-medium'>Simple just put your task to do, so easy to organice your time and manage your activities to get better productivity</p>
        </div>

      </div>
      <Link to="/todos" className='flex items-center w-full justify-center'>
          <button className='bg-slate-800 text-white text-3xl py-2 px-3 rounded-lg hover:bg-slate-700'>
              Start now
          </button>
      </Link>
    </div>
  )
}

export default About