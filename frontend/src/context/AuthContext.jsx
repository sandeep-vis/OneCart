// import React from 'react'
// import { createContext } from 'react'
// export const authDataContext= createContext()
// function AuthContext({children}) {
//     let serverUrl = "https://onecart-backend-304n.onrender.com"

//     let value = {
//        serverUrl
//     }
//   return (

    
//     <div>
//         <authDataContext.Provider value={value}>
//             {children}
//         </authDataContext.Provider>
      
//     </div>
//   )
// }

// export default AuthContext


import React, { createContext } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "https://onecart-backend-304n.onrender.com";

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;