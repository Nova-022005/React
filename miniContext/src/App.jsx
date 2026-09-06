import './App.css'
import Login from "../components/Login"
import Profile from "../components/Profile"
import UserContextProvider from "../context/UserContextProvider"


function App() {

  return (
  <UserContextProvider U>
  <h2>Let's learn state management in React starting with Context-API</h2>
  <Login />
  <Profile />
  </UserContextProvider>
  )
}

export default App
