import React, { useId } from 'react'

export const UseIdHook = () => {
    const firstName = useId();
    const lastName = useId();
  return (
    <div>
        <label htmlFor={firstName}>First Name: </label>
        <input className='border-black border-2 rounded p-2 m-2' id={firstName} type='text' />
        <label htmlFor={lastName}>Last Name: </label>
        <input className='border-black border-2 rounded p-2 m-2' id={lastName} type='text' />
    </div>
  )
}
