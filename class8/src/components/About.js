import User from "./User"
import UserClass from "./UserClass"
export default About = ()=>{
    return(
        <div>
            <h2>About page</h2>
            <User name = "Shaurya Tiwari" location = "Pali"></User>
            <UserClass name = "Rahul Tiwari" location = "chauka"></UserClass>
        </div>
    )
}