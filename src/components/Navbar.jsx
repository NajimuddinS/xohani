import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='max-w-[1300px] m-auto flex justify-between pt-3 pb-3 pl-20 pr-20'>
        <img src={logo} alt="" className='w-fit h-fit' />
        <button className='bg-[#584CB7] p-4 rounded-md text-white'> + Upload webinar</button>
    </div>
  )
}

export default Navbar