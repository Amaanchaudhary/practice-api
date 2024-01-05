import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalContext";

const Register = () => {
    const rout = useNavigate()

    // const {state , Increment  , Decrement , Reset} = useContext(GlobalContext);
    const {state , dispatch , Decrement , Reset} = useContext(GlobalContext);

    return(
        <div>
            <h1>Register</h1>
            <button onClick={() => rout("/")}>Back to home</button>
            <h1>{state?.counter}</h1>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
            <button onClick={(Decrement)}>-</button>
            <button onClick={(Reset)}>Reset</button>
        </div>
    )
}

export default Register