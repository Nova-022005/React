import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'click me to vivit google'
// }

const reactElement=React.createElement(// to render
  'a',
  {href:"https://google.com",target :"_blank"},
  'click me to visit google'
) 

// const anotherElement=(
//   <a href="https://google.com" target="_blank">visit google</a>
// )

createRoot(document.getElementById('root')).render(<App/>)// rendering but not working 
