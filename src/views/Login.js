import FormularioLogin from "../components/Login/FormularioLogin";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useContext } from "react";
import AuthContext from "../AuthContext";

export default function Login({onLogin}){
    const navigate = useNavigate()
    const {token, handleLogin} = useContext(AuthContext)
    console.log(token, handleLogin)
    return(
        <div>
            <h1>Login</h1>
            <FormularioLogin/>
            <div className="buttonLoginForm">
                <button onClick={onLogin}>Enviar</button>
            </div>
            <div>{token}</div>
            <p>¿Aún no tienes cuenta? <span onClick={()=> navigate('/register')} className='redirectLink'>Regístrate</span></p>
        </div>
    )
}