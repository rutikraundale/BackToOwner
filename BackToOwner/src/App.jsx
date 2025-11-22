import React from 'react'
import { Camera } from 'lucide-react';

const App = () => {
  return (
    <div className='bg-slate-700 m-4 p-4 item-center rounded-3xl '>
      <div className='flex flex-wrap m-2 p-2 items-center gap-4'>
            <img className='w-[90px] h-[90px] rounded-full' src="https://images.pexels.com/photos/30109638/pexels-photo-30109638.jpeg" alt="" />
            <h2 className='text-white font-semibold text-2xl' >Rutik Raundale</h2>
            
      </div>
      <div className='flex flex-wrap m-2 p-2 '>
        <p> here we go again for react </p>
        <p></p>
      </div>
    </div>
  )
}

export default App
