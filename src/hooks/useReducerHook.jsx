import React, { useReducer, useState } from 'react'

const reducer = (state, action)=>{
  switch(action.type){
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "double":
      return {count: state.count * 2};
    case "half":
      return {count: state.count / 2};
    default:
      console.error("No Action Type");

  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
      <div className='flex mx-auto my-10 w-full justify-center items-center gap-5'>
      <h1 className='text-xl'>Count is: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})} className='bg-green-500 text-white font-300 px-2'>+</button>
      <button onClick={()=> dispatch({type: "decrement"})} className='bg-blue-700 text-white font-300 px-2'>-</button>
      <button onClick={()=> dispatch({type: "double"})} className='bg-red-700 text-white font-300 px-2'>*</button>
      <button onClick={()=> dispatch({type: "half"})} className='bg-red-700 text-white font-300 px-2'>/</button>
      </div>
      )
}
