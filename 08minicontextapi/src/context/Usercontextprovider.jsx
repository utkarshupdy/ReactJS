import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider =({children})=>{ // children is basically a components which we want to wrap ionside provider
    const [user , setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user , setUser}}>
        {children}
        
        
        </ UserContext.Provider>


    )


}
export default UserContextProvider