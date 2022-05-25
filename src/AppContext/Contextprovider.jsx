import React, { useContext, useState } from "react"

export const AppContex = React.createContext()

function AppContextProvider({children}){
    const [state,setstate]=useState("light")

    const toggletheme =()=>{
          state ==="light" ? setstate("dark") :setstate("light")
    }
    return(
        <AppContex.Provider value={[state,toggletheme]}>
<div>
   
    {children}
</div>
        </AppContex.Provider>
    )
}
export default AppContextProvider;
