
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/Usercontextprovider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>react with chai </h1>
      <Login />
      <Profile />
      
    </ UserContextProvider>
  )
}

export default App
