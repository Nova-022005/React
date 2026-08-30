import { use, useState } from 'react'
import './App.css'
import '/components/color'
import './Password'
import Color from '../components/color'
import Password from './Password'
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      {/* <Color /> */}
      <Password />
    </>

  )
}

export default App
