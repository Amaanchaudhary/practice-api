import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/Auth.context"

const HomePage = () => {

    const rout = useNavigate()

    const {state} = useContext(AuthContext)
 

    function Login(){
        rout("/login")
    }

    return (
        <>
            <h1>HomePage</h1>
            <h1>{state?.user?.name}</h1>
            <button onClick={Login}>Go to Login</button>
        </>

    )
}

export default HomePage