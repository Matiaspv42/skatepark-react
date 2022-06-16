import './navbar.css'
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../AuthContext';

export default function Navbar(){

    const {token,login} = useContext(AuthContext)

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
           {/* {routes.map (({to, title}, index) => 
            <NavLink to={to}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            key = {index}
            >{title}</NavLink>
            )} */}
            <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
            <NavLink to="/login" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Iniciar Sesión</NavLink>
            <NavLink to="/register" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Registrarse</NavLink>
           {login && <NavLink to="/admin" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Administrador</NavLink>}
            {login && <NavLink to="/profile" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Datos de perfil</NavLink>}
        </nav>
        )
}