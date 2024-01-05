import { createContext, useEffect, useReducer } from "react";
import api from "../helpers/axios.config";

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            localStorage.removeItem('Mera-token')
            alert('logout success')
            return { ...state, user: null }
        default:
            return state

    }
}

const ParentAuthContext = ({ children }) => {

    const initialState = { user: null }

    const [state, dispatch] = useReducer(reducer, initialState)

    const Login = (data) => {
        dispatch({ type: 'LOGIN', payload: data })
    }

    const Logout = () => {
        dispatch({ type: "LOGOUT" })
    }

    useEffect(() => {
        // alert("page Refreshed")
        const getCurrentUser = async () => {
            try{
                const response = await api.post('/auth/get-current-user', {token})
                if(response.data.success){
                    Login(response.data.user)
                }
            }catch(error){
                alert(error?.response.data.message)
            }
        }

        const token = JSON.parse(localStorage.getItem("Mera-token")) //step1: retrieve token from LS
        if(token){    //Check if token is available or not
            // console.log(token , 'token')
            getCurrentUser()  //call the function in which we send token to Backend and take id of user
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentAuthContext