import React from "react"

const title = (
    <h1>React started for revision</h1>
)

const styleObj = {
    backgroundColor:"yellow",
   color : "red"

}

const Header = () => {
    return (
        <div>
            {title}
           <h3 style = {styleObj}>jsx and babel ki dosti</h3>
           <h4>Hello dunia from react</h4>
       </div>
       )
}


export default Header