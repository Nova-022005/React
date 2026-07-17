import { use, useState } from 'react'

function Color (){
  const [color,setColor] =useState("olive");
   return (
   <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
        <div className='flex fles-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-full'>
          <button onClick={()=> setColor("blue")} 
          className='outline-none px-4 rounded-full text-white'
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("green")}
          className='outline-none px-4 rounded-full text-white'
          style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("orange")}
          className='outline-none px-4 rounded-full text-white'
          style={{backgroundColor:"orange"}}>Orange</button> 
          <button onClick={()=> setColor("red")}
          className='outline-none px-4 rounded-full text-white'
          style={{backgroundColor:"red"}}>Red</button>
        </div>

      </div>
    </div>
    </>

  )
}

export default Color