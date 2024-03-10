import React from "react"
import Restaurant_Container from "./Restaurant_Container"
import { useEffect } from "react"
import '../index.css'


const Body = ()=>{

    useEffect(()=>{
        console.log("useEffect is called")
    })

    return(
        <div className="body">

        <div className="search_bar">
            <input type="text" placeholder="search hotels and foods"/>
            <div className="searchIcon"></div>
        </div>

        <div className="res-container">
        {/* <SearchBar/> */}
            <Restaurant_Container/>
            
        </div>


    </div>
    )
}


export default Body