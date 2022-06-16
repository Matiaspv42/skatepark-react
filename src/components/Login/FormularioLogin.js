import './formularioLogin.css'
import axios from 'axios'
import { useState, useContext } from 'react'

import AuthContext from "../../AuthContext";

export default function FormularioLogin(){
    const {token, setToken, login, setLogin} = useContext(AuthContext)
    const loginSkater = async () => {
        try {
              const res = await axios.post("http://localhost:3001/login", skater)
              setToken(res.data.token)
              setLogin(true)
              localStorage.setItem('token', 'Bearer '+ res.data.token)
              alert(`Bienvenido ${res.data.respuesta[0].nombre}`)
          } catch (error) {
              alert('algo salió mal :(')
              console.log(error)
          }
    }

    const [skater, SetSkater] = useState({})
    const handleSkater = ({target}) => {
        const {name:property, value} = target;
        skater[property] = value;
        SetSkater({...skater})
    }

    return(
        <div className="LoginForm">
            <div className="inputLoginForm">
                <label>Email:</label>
                <input name="email" value={skater.email} onChange={handleSkater}/>
            </div>
            <div className="inputLoginForm">
                <label>Contraseña:</label>
                <input name='password' value={skater.password} onChange={handleSkater}/>
            </div>
            <div className="buttonLoginForm">
                <button onClick={loginSkater}>Enviar</button>
            </div>
        </div>
    )
}