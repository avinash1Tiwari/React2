import { useState } from "react"

const User = (props) =>{

  const [count,setCount] = useState(0)
  let [count1] = useState(1)

   
    function clickHandler(){
      setCount(
        count1+1,
        count1++
      )
    }

    return <div className="user-card">

      <h2 >Count : {count}</h2>
      <button onClick={clickHandler}>press-it</button>
      <h2>Count1 : {count1}</h2>
      <h2>Name : {props.name}</h2>
      <h3>Location : {props.location}</h3>
    </div>
}

export  default User