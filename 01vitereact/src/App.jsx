import Chai from "./chai"
function App() {

  const username="chai aur username"
  return (
  <>
    <Chai />
  <h1>Chai aur code {username}</h1>

  </>
  )
}

export default App

//* here username is a experession and 
// //!{usrename}
//*  is a evaluated expression it means that instead of js we write final outcome of javascript
//? can be better understood that we can't write 
// *{if (true ) username}
//?  because it is a statement they just controlflow wherease, a ternary operator work a sit is a expression