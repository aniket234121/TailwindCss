import React from 'react'

const Button = ({msg,img}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-[#ff6452] rounded-full text-white'>
        {msg}
        <img src={img} alt="button icon" className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button