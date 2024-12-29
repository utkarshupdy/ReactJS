import { useContext , createContext } from "react"



export const ThemeContext = createContext({
  themeMode : "light",
  darktheme : ()=>{},
  lightheme : ()=>{},


})
export const ThemeProvider = ThemeContext.Provider // we can also do like that instead of creating another file .jsx , this basically wraps app compenent inside it so all other components automatically wraps 

export default function useTheme(){   // basically this hook is writtem so that in every file , we dont have to import usecontext and user context both , instead of this , we just have to import usetheme fxn wghich automatically import usecontext and themecontext both 
  return useContext(ThemeContext)
}
// custom hooks is also a function