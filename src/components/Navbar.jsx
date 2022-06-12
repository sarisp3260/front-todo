import React from 'react'
import { SiTodoist } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between text-slate-700 px-5 py-4 md:px-10'>
        <div className="logo flex items-center text-2xl gap-5 text-slate-800">
            <Link to="/">
              <span className='flex items-center'>Tod<SiTodoist/> List</span>
            </Link>
        </div>

        <div className="sections">
            <button className='bg-indigo-700 text-white py-2 px-3 rounded-lg hover:bg-indigo-700'><a href="https://github.com/sarisp3260/front-todo" target='_blank'>Repository</a></button>
        </div>
    </nav>
  )
}

export default Navbar