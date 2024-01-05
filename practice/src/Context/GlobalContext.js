import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const reducer = (state , action) => {
    switch(action.type){
        case "INCREMENT" :
            return {...state , counter : state.counter + 1}
        case "DECREMENT":
            return {...state , counter : state.counter - 1}
        case "RESET" :
            return {...state , counter : 0}
        default :
            return state
    }
}

const ParentGlobalContext = ({children}) => {

    const initialState = {counter : 0}

    const [state , dispatch] = useReducer(reducer , initialState);

    // const Increment = () => {
    //     dispatch({type : "INCREMENT"})
    // }
    const Decrement = () => {
        dispatch({type : "DECREMENT"})
    }
    const Reset = () => {
        dispatch({type : "RESET"})
    }

    return (
        // <GlobalContext.Provider value={{state, Increment , Decrement , Reset}}>
        <GlobalContext.Provider value={{state, dispatch , Decrement , Reset}}> 
            {children}
        </GlobalContext.Provider>
    )
}

export default ParentGlobalContext