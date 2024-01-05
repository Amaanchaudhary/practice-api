import { useContext, useState } from "react"
import api from "../helpers/axios.config"
import { AuthContext } from "../Context/Auth.context"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [data, setData] = useState({ email: '', password: '' })

    const { Login, state, Logout } = useContext(AuthContext);

    console.log(data, 'data')
    const rout = useNavigate();

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (data.email && data.password) {
            if (data.password.length >= 8) {
                try {
                    const response = await api.post("/auth/login", { data })
                    if (response.data.success) {
                        localStorage.setItem("Mera-token", JSON.stringify(response.data.token))
                        Login(response.data.user)
                        console.log(response.data, 'response')
                        setData({ email: '', password: '' })
                        alert("Login Successfull");
                        rout('/')
                    }
                    else {
                        throw new Error("Something went wrong")
                    }
                } catch (error) {
                    console.log(error?.response.data.message)
                    alert(error?.response.data.message)
                }
            } else {
                alert("Password must be 8 digit")
            }
        } else {
            alert("All fields are mandatory")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h1>LOGIN</h1>
                <h1>{state?.user?.name}</h1><br /><br />
                <label>Email</label><br />
                <input type='email' name='email' onChange={handleChange} placeholder="Email" /><br /><br />
                <label>Password</label><br />
                <input type='Password' name='password' onChange={handleChange} placeholder="Password" /><br /><br />
                <input type='submit' value='Login' />
            </form><br/>
            <button onClick={Logout}>LOGOUT</button>
            <button style={{margin : '10px'}} onClick={() => rout('/register')}>New User?</button>
        </div>
    )
}

export default Login