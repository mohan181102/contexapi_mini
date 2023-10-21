import Userdata from "./contex";
import React, { useState } from "react";




const Userdataprovider = function({children}){
    const [name,setname] = useState("")
    return (
        
    <>

        <Userdata.Provider value={{name,setname}}>
        {children}
        </Userdata.Provider>
    </>
    )
}

export default Userdataprovider

