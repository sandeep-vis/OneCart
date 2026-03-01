// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './AuthContext'
// import axios from 'axios'

// export const userDataContext = createContext()
// function UserContext({children}) {
//     let [userData,setUserData] = useState("")
//     let {serverUrl} = useContext(authDataContext)


//    const getCurrentUser = async () => {
//         try {
//             let result = await axios.get(serverUrl + "/api/user/getcurrentuser",{withCredentials:true})

//             setUserData(result.data)
//             console.log(result.data)

//         } catch (error) {
//             setUserData(null)
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//      getCurrentUser()
//     },[])



//     let value = {
//      userData,setUserData,getCurrentUser
//     }
    
   
//   return (
//     <div>
//       <userDataContext.Provider value={value}>
//         {children}
//       </userDataContext.Provider>
//     </div>
//   )
// }

// export default UserContext


import React, { createContext, useState, useEffect } from "react";

export const userDataContext = createContext();

function UserContext({ children }) {
  //  Initialize userData from localStorage (so refresh keeps user logged-in)
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : null;
  });

  //  Save userData to localStorage whenever it changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;