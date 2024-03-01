import React from "react"
import ReactDOM from "react-dom/client"

//1. creating h1-tag using react
// const header = React.createElement("h1",{},"Namaste React ");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);







//2.  creating h1-tag using JSX

// const jsxHeading = (<h1 className="head" tabIndex="5">
//     Writing Namaste react using JSX
//     </h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading );








// 3. creating a component

// const HeadingComponent = () => {

//     return(
//         <h1>This is a react component</h1>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/> );






// 4. Component composition

const Title = () =>{

    return(
        <h2>This is title component and is inside HeadingComponent</h2>
    )
}

const HeadingComponent = () => {

    return(
        <div>
        <Title/>
        <h1>This is a react component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/> );

