import FormularioLogin from "../components/Login/FormularioLogin";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useContext } from "react";
import AuthContext from "../AuthContext";

export default function Login({onLogin}){
    const navigate = useNavigate()
    const {token,login} = useContext(AuthContext)
    return(
        <div>
            <h1>Login</h1>
            <FormularioLogin/>
            <p>¿Aún no tienes cuenta? <span onClick={()=> navigate('/register')} className='redirectLink'>Regístrate</span></p>
        </div>
    )
}