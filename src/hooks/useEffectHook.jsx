import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {
    const [data, setData] = useState([])
    const [showPedro, setShowPedro] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((json) => (setData(json)));
    }, [])

    useEffect(()=>{
        console.log("Pedro")
    }, [showPedro])
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <button onClick={()=>setShowPedro((showPedro) => !showPedro)} className='py-2 px-4 bg-green-500 rounded-full'>{showPedro ? "Hide" : "Show"} Pedro</button>
        <h1 className='text-xl m-4'>Posts</h1>
        <ul className='list-disc flex flex-col'>
            {data.map((item)=> {
                return <li className='text-center w-auto' key={item.id} value={item.id} >{item.title}</li>
            } )}
        </ul>
    </div>
  )
}
