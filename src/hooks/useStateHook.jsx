import React, { useState } from 'react'

export const UseStateHook = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex mx-auto my-10 w-full justify-center items-center gap-5'>
    <h1 className='text-xl'>Count is: {count}</h1>
    <button onClick={() => setCount((prev) => prev + 1)} className='bg-green-500 text-white font-300 px-2'>+</button>
    <button onClick={()=> setCount((prev) => prev - 1)} className='bg-blue-700 text-white font-300 px-2'>-</button>
    <button onClick={()=> setCount((prev) => prev * 2)} className='bg-red-700 text-white font-300 px-2'>*</button>
    <button onClick={()=> setCount((prev) => prev / 2)} className='bg-red-700 text-white font-300 px-2'>/</button>
    </div>
  )
}
