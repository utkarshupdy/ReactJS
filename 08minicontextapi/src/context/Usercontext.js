import React from "react";

const UserContext = React.createContext() // we can also pass some default value nd functions in it in term of an array {}

// usercontext is same as global variable 
// apart from usercontext , we also have to create provider , so that all the componets gets directly access to the usecontext
{/* <UserContext>   PROVIDER STRUCTURE
    <>Login</>
    <>Card</>
       <>Data</>
    <>Card</>


<UserContext /> */}

export default UserContext