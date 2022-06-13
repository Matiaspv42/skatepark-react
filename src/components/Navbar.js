import './navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar(){
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
    textDecoration: "underline",
    color: "#8C5615"
    };

    const routes = [
        {
            to:'/',
            title: "Home"
        },
        {
            to:'/login',
            title: "Iniciar Sesión"
        },
        {
            to:'/register',
            title: "Registrarse"
        },
        {
            to:'/admin',
            title: "Administrador"
        },
        {
            to:'/profile',
            title: "Datos de Perfil"
        },
    ]

    return(
        <nav className="Navbar">
           {routes.map (({to, title}, index) => 
            <NavLink to={to}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            key = {index}
            >{title}</NavLink>
            )}
        </nav>
        )
}