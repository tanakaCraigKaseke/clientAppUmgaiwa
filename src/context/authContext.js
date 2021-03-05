import React, {useReducer} from 'react';
import{navigate} from "../navigationRef";


const AuthContext = React.createContext();

const authReducer = (state, action) =>{
    switch(action){
        case 'register':
            return {...state, name:action.payload.name, surname:action.payload.surname, email:action.payload.email, phoneNumber:action.payload.phoneNumber, gender:action.payload.gender}
        default:
            return state
    }
} 

export const AuthProvider = ({children})=>{
    const register = (value)=>{
        // dispatch({type:'register', payload:value});
        // navigate('Home');
    }
    const [stateAuth, dispatch] = useReducer(authReducer, {name:'Moses', surname:'Ncube', phoneNumber:'+27 8595841215', email:'agromoss@umgaiwa.co.za',gender:'Male'})
    return <AuthContext.Provider value={{stateAuth, register}}>{children}</AuthContext.Provider>
}


export default AuthContext