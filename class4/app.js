import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
// import foodLogo from './assets/foodLogo'

const Header = ()=>{

    return(
        <div className="header">
           
           <div >
            <img  className="logo" src="https://img.lovepik.com/element/45006/8224.png_860.png" alt="" />
           
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


const AppLayout = ()=>{
    return(
        <div>

            <Header/>
        </div>
    )
}

const heading = React.createElement("h1",{},"jai shree ram")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)