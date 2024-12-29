
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Box from './box'

function App() {
  const [themeMode , setThemeMode] = useState("light")
  const lightheme = ()=>{
    setThemeMode("light")
  }
  const darktheme=()=>{
    setThemeMode("dark")
  }

  // actual change in theme
useEffect(() => {
  document.querySelector('html').classList.remove("light" , "dark")
  document.querySelector("html").classList.add(themeMode)
  
}, [themeMode])



  return (
    <ThemeProvider value={{darktheme , lightheme , themeMode}}>
      <Box />
      

    </ThemeProvider>
  )
}

export default App
