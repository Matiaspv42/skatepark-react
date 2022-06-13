import FormularioLogin from "../components/Login/FormularioLogin";

export default function Login({onLogin}){
    return(
        <div>
            <h1>Login</h1>
            <FormularioLogin/>
            <div className="buttonLoginForm">
                <button onClick={onLogin}>Enviar</button>
            </div>
            <p>¿Aún no tienes cuenta? Regístrate</p>
        </div>
    )
}