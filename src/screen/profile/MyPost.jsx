import React, { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import GetAllPost from '../../Json/GetAllPost'

const MyPost = () => {

  const[modal, setModal] = useState(true)


  

  

  return (
    <main className='w-full min-h-screen flex items-center flex-col bg-slate-200 ' > 
    <h1>Post Screen</h1>
        <div className='w-full px-5 mt-5 py-5 ' >
          <h1>Card Postingan</h1>
            {/* {
              data?.map((e) => ( */}
                <div className='w-full h-h-[200px] pt-4 px-3 bg-slate-100 shadow-md rounded-md my-3 relative ' >
                <h1 className='font-bold' >tess</h1>
                <p className='text-sm mt-2' >tes</p>
                <div className='flex justify-between w-full mt-6 items-center ' >
                  <small className='flex justify-end ' >I am</small> 
                  <small>12-32-1020</small>
                </div>
                <button onClick={() => setModal(prev => !prev)} ><FaEllipsisV className='absolute top-2 right-1 ' /></button>

            <div className={`absolute top-2 w-[70px] text-xs  gap-2 h-[80px] bg-white shadow-md flex flex-col right-2 ${modal ? 'block' : "hidden"}`} >
            <button className='absolute right-2 top-1 ' onClick={() => setModal(prev => !prev)} >X</button>
              <button className='mt-7' >Delete</button>
              <button className='mt-1'>Update</button>
            </div>
            </div> 
              {/* ))
            } */}

        </div>
    </main>
  )
}

export default MyPost