{/* <div>
<div>
    
</div>
</div> */}


// const heading = React.createElement("div", {},
//     React.createElement("div", {},
//         React.createElement("div", {}, "hello tiwari"))
// )


//    <div>
//       <div>
//         <h1></h1>
//         <p></p>
//       </div>
//    </div>

const heading = React.createElement("div", {},
    React.createElement("div", {id:"d1"},
        React.createElement("div", {id:"d2"},
       
        [React.createElement("h1", {id:"h1"},"this is para inside nested div"),
        React.createElement("p", {id:"p1"},"this is para inside nested div")]
       ))
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)