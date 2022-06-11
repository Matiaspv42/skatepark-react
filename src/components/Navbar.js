import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Iniciar Sesión</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
            <NavLink to="/admin">Administrador</NavLink>
            <NavLink to="/profile">Datos de Perfil</NavLink>
        </nav>
        )
}