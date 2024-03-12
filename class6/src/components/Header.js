import React, { useState } from "react";

import {LOGO_URL} from '../utils/constants'


const Header = ()=>{

  // console.log("re rendering process")

  const [btn,setBtn] = useState("Log-in")

  clickHandler = ()=>{

    let currBtn = btn == "Log-in" ? "Log-out" : "Log-in"
    setBtn(currBtn)
  }

    return(
        <div className="header">
           
           <div >
            <img  className="logo" src={LOGO_URL} alt="" />
           
           </div>

           <div className="navbar">
             <ul className="item">
                <li className="items">Home</li>
                <li className="items">About us</li>
                <li className="items">Login/SignUp</li>
                <li className="items">cart</li>
                <button className="login" onClick={clickHandler}>{btn}</button>
             </ul>

           </div>
        </div>

    )
}

export default Header;