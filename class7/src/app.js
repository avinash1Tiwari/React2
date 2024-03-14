import React from "react";
import  ReactDOM  from "react-dom/client";

import AppLayout from "./components/Layout";


const heading =  <h2>Hello, kaise hai
                                jai shree ram</h2>;

// const heading = React.createElement("h1",{},"jai shree ram")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)