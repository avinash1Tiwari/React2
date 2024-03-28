import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);


        console.log("printing props")
        console.log(props)

        this.state = {
            count : 0,
            count2 : 2
        }

    }

    

    render(){
        const {name,location} = this.props

        // destructuring the state-variables
        const {count2,count} = this.state

            return <div className="user-card">

            <p>from component-class</p>
            <h2>Count : {this.state.count}</h2>
            <h2>Count2 : {count2}</h2>
        <h2>Name : {name}</h2>
        {/* <h2>Name : {this.props.name}</h2> */}
        {/* <h3>Location : {this.props.location}</h3> */}
        <h3>Location : {location}</h3>
      </div>
   
    }
}

export default UserClass