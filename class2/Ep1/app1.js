import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {},
    React.createElement("div", {id:"d1"},
        React.createElement("div", {id:"d2"},
       
        [React.createElement("h1", {id:"h1"},"this is para inside nested div"),
        React.createElement("p", {id:"p1"},"this is para inside nested div")]
       ))
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)