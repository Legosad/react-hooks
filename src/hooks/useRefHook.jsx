import React, { useEffect, useRef, useState } from 'react'

export const UseRefHook = () => {
  //ref example # 1
  // const inputRef = useRef();
    // const showConsole = () => {
    //   if(!inputRef.current.value) inputRef.current.focus();
    //   console.log(inputRef.current.value || "No Value");
    // }
    const [count, setCount] = useState(0)
    const prevCount = useRef(0)
    useEffect(()=>{
      prevCount.current = count;
    }, [count])
  return (
    //ref example # 1
    // <div className='w-full h-lvh gap-2 flex flex-col justify-center items-center'>
    //     <input ref={inputRef} className='border-2 ' type='text' />
    //     <button onClick={()=> {
    //       showConsole();
    //     }}  className='w-50 border-2 border-black rounded-full px-4 py2'>Console Log</button>
    // </div> 
    <div>
      <p>Count is: {count}</p>
      <p>Prev Count is: {prevCount.current}</p>
      <button onClick={()=>setCount(prev => prev + 1)}>Add One</button>
    </div>
  )
}
