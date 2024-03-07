import React from "react"
import Restaurant_Container from "./Restaurant_Container"

import '../index.css'


const Body = ()=>{

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