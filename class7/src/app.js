import React from "react";
import  ReactDOM  from "react-dom/client";

import AppLayout from "./components/Layout";



// const heading =  <h2>Hello, kaise hai
//                                 jai shree ram</h2>;

// // const heading = React.createElement("h1",{},"jai shree ram")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<AppLayout/>)








import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";


import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
    {
        path :"/",
        element : <AppLayout/>,
        // errorElement : <div>Oops!! something went wrong</div>

        errorElement : <ErrorPage/>
    },
    {
        path :"/about",
        element : <About/>
    },
    {
        path :"/contact",
        element : <Contact/>,
       
    }
])



const heading =  <h2>Hello, kaise hai
                                jai shree ram</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)