import { createContext, useState } from "react"
import axios from "axios"


 const AuthContext = createContext()
const AuthContextProvider=({children})=>{
    const[data ,setdata] =useState([])
  const [Auth,setAuth] =useState(false)
  const [token , settoken]   =useState(null)
const loginData={
    "email":"eve.holt@reqres.in",
    "password":"cityslicka"
}
//if user logged in
const Authtoggle=()=>{
    if(Auth){

        settoken(null)
        setAuth(false)
        return;
    }
    // axios.post('https://reqres.in/api/login')
    // .then((res=>{
    //     setdata(res.data)
    //     setAuth(true)
    //     settoken(data.token)
    // }))
   // user not logged in
    fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(loginData)

    })
    .then(res=>res.json())
    .then(loginData=>{
        setAuth(true)
        settoken(loginData.token)
        
    });
    
}

return <AuthContext.Provider value ={{Auth,Authtoggle,token}} >
{children}

</AuthContext.Provider>




}
export {AuthContextProvider, AuthContext}
