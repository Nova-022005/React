import { useState } from 'react'

import './App.css'

import Card from './components/card.jsx'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Card/>
    <Card username="saurav" btnText="visit me"/>
    {/* <div className='flex justify-center items-center h-screen'>
     <h1 className='bg-green-400 text-black p-5 rounded-xl '>Tailwind Test</h1>
      <div className="relative h-[400px] w-[300px] rounded-md m-30">
  <img
    src=""C:\Users\saura\Downloads\gemini-2.5-flash-image-preview (nano-banana)_a_good_but_the_pose_do.png""
    alt="AirMax Pro "
    className="z-0 h-full w-full rounded-md object-cover "
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent "></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
</div> */}
    </>
  )
}

export default App
