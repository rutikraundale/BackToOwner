import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
        <div className='flex flex-wrap flex-col w-1/2 h-auto justify-center itmes-center bg-white rounded-2xl gap-2'>
                <form action="" className='flex flex-col w-full h-auto justify-center items-center m-2 p-2 '>
                    <input type="email" placeholder='Enter your email' className='w-1/2 h-auto text-black flex m-4 p-2 justify-center items-center ' />
                    <input type="password" name="password" id="pass" className='w-1/2 h-auto text-black flex m-4 p-2 justify-center items-center ' placeholder='Enter Password' />
                    <input type="password" name="cpassword" id="cpass" className='w-1/2 h-auto text-black flex m-4 p-2 justify-center items-center' placeholder='Confirm Password'/>
                    <button className='m-4 p-2 flex justify-center items-center bg-black text-white text-2xl w-25 h-12 rounded' type="submit">Submit</button>
                </form> 
        </div>

    </div>
  )
}

export default Signup