import React from "react"
import Header from "./Header"
import Body from "./Body"
import { Outlet } from "react-router-dom"


const AppLayout = ()=>{
    return(
        <div>

            <Header/>
            <Outlet/>
            {/* <Body/>   */}
        </div>
    )
}

export default AppLayout