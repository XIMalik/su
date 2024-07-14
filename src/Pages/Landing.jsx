import React from 'react'
import ClickReveal from '../Components/ClickReveal'

const Landing = () => {
  return (
    <div className='landing w-[100%] h-[100%] flex px-4 justify-center items-center flex-col gap-6'>
        <h1 className='hello text-3xl text-center text-white'>Hey beautiful, this is for you</h1>
        <ClickReveal />
    </div>
  )
}

export default Landing