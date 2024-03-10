import React from "react";

import {LOGO_URL} from '../utils/constants'


const Header = ()=>{

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
             </ul>
           </div>
        </div>

    )
}

export default Header;