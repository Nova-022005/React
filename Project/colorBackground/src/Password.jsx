import { use, useCallback, useEffect, useState,useRef } from 'react'

function Password() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [Password, setPassword] = useState("")
  const passwordRef= useRef(null);

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword]) //! not necessaryti give setPassword


  document.body.style.backgroundColor = "black" //* black-bg

  const copyPasswordClipboard= useCallback(()=>{
    window.navigator.clipboard.writeText(Password);
  },[Password])

  useEffect(()=>{passGen()},[length,numberAllow,charAllow,passGen])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'
      >
        <h1 className='text-white text-center my-3 '>Password Geneartor</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-blue-400 text-white'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-orange-500 text-white px-3 py-.5 shrink-0'
            onClick={copyPasswordClipboard}
          >copy</button>

        </div>
        <div className='flex flexx-wrap text-sm gap-x-2'>
          <div className='flex items-center gap-x-3'>
            <input type="range"
              min={6}
              max={15}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={()=>{
                setNumberAllow((prev)=>!prev);
              }}
            />
            <label> Number</label>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='characterInput'
              onChange={()=>{
                setcharAllow((prev)=>!prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}
export default Password