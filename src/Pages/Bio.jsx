import React from 'react';
import su from '../Style/su.jpg'

const Bio = () => {
  return (
    <div className='bio flex justify-center w-full h-full justify-center items-center flex-col'>

      <h1 className='hello mb-6'>Well, you found me</h1>

      <div className='floating-div w-[200px] h-[200px] mb-[50px] bg-red-900 shadow-xl rounded-full overflow-hidden animate-float'>
  <img src={su} alt="" className='w-full h-full object-cover'/>
</div>

      <span className='hello text-center px-4'>I'm the baddest there is, and I got batman behind me </span>
    </div>
  )
}

export default Bio