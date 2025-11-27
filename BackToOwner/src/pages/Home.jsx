import React from 'react'
import Itemscard from './Itemscard'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-auto overflow-auto justify-center items-center gap-4 mt-4 py-4'>
      <h2 className='font-bold text-white text-xl text-center italic md:text-3xl'>Did You Find Something ? ..... </h2>
      <section className="w-full h-auto flex flex-wrap flex-col md:flex md:flex-row">
        <div
          className='w-full h-auto flex flex-col  justify-center items-center text-center flex-wrap gap-2 mx-4 p-2 md:flex md:flex-row md:p-2 md:m-4'>
          <button
            className='flex items-center justify-center w-[250px] h-auto m-4 p-1 text-base text-center bg-white text-black rounded-xl font-semibold  hover:border border-white hover:bg-black hover:text-white md:p-2 md:m-4 md:w-[200px] md:h-11 md:text-xl'>Post
            Items</button>
          <button
            className='flex items-center justify-center w-[250px] h-auto m-4 p-1 text-base text-center bg-black text-white  rounded-xl font-semibold  hover:border-2 hover:border-black border-2 border-white hover:bg-white hover:text-black md:p-2 md:m-4 md:w-[200px] md:h-11 md:text-xl'>Find
            Items</button>
        </div>
      </section>

        {/* Main section of cards */}
        <Itemscard/>
    </div>
  )
}

export default Home