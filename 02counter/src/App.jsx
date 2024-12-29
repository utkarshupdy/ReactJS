import { useState } from 'react' // hooks in react for controlling updation in UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter , setcounter] =  useState(15)
  // let counter = 5 ;
  const addValue = ()=>{
    console.log("clicked" , counter)
    counter = counter + 1 ;
    setcounter(counter)
  }
  const removeValue = ()=>{
    setcounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer : {counter}</p>
      
     
    </>
  )
}

export default App
