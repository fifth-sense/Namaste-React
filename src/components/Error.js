import { useRouteError } from "react-router"
const Error = () => {
    const err = useRouteError();
    console.log("err", err)
    return(
        <div>
            <h4>Oops!!</h4>
            <h4>Something went wrong!!</h4>
            <h3>{err.data}</h3>
            <h3>{err.status}</h3>
            <h4>{err.statusText}</h4>


        </div>  
    )
}
export default Error;