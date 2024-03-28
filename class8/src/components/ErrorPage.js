import { useRouteError } from "react-router-dom"


export default ErrorPage = ()=>{

    const err = useRouteError();
    console.log("page Router error => ")
    console.log(err)
    return(
        <div>
            <h2>Oops !! <br /> Something went wrong  </h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}