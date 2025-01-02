import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export const UseImperativeHandleHook = () => {
    const inputRef = useRef();
  return (
    <div className='w-full h-lvh flex justify-center items-center gap-5'>
        <CustomInput ref={inputRef}/>
        <button onClick={() => inputRef.current.focusInput()} className='w-50 px-4 py-2 border-2 border-black'>Focus Input</button>
        <button onClick={() => inputRef.current.clearInput()} className='w-50 px-4 py-2 border-2 border-black'>Clear All</button>
    </div>
  )
}

//Child Componenet

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, ()=>({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = "";
        },
    }));
    return <input type='text' ref={inputRef} placeholder='Type Here' className='border-2 rounded-full m-2 p-2' />
})
