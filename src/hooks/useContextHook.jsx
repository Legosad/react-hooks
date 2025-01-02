import React, { createContext, useContext, useState } from 'react'
const GlobalStateContext = createContext(null);

export const UseContextHook = () => {
    const[isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{isToggle, setIsToggle}}>
    <div className='flex flex-col justify-center items-center h-screen gap-8'>
        <h1 className='text-6xl'>Current State of Toggle</h1>
        <ChildSetIsToggle />
        <ChildIsToggle />
    </div>
    </GlobalStateContext.Provider>
  )
}


 const ChildIsToggle = () => {
    const{isToggle} = useContext(GlobalStateContext)
    return <p className=  {`text-white w-full text-center text-3xl py-4 ${isToggle ? "bg-green-500" : "bg-red-500"}`} >Toggle is currently: {isToggle ? "ON" : "OFF"}</p>
}
const ChildSetIsToggle = () => {
     const{isToggle, setIsToggle} = useContext(GlobalStateContext)
  return <button className={`text-white py-4 px-10 rounded-full text-xl font-mono ${isToggle ? "bg-cyan-500" : "bg-black"}`} onClick={() => setIsToggle((prev) => !prev)}>Change Toggle</button>
}


