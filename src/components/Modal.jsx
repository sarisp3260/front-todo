import React, { useContext, useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Modal = ({children, modal, setModal}) => {

  return (
    <>
    {modal &&
        (<div className='h-screen w-full fixed right-0 top-0 bg-slate-800/20 backdrop-blur-3xl text-white flex justify-center z-50'>
          <div>
              <FaTimes onClick={() => setModal(false)} className='absolute top-5 right-5 text-5xl hover:text-red-600'/>
          </div>
          <section className='w-full flex flex-col justify-center items-center h-full sm:w-11/12 lg:w-9/12'>
            <div className='w-full'>
                {children}
            </div>
          </section>
         </div>) 
    }
    </>
  )
}

export default Modal