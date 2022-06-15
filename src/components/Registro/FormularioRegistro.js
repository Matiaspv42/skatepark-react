import axios from 'axios'
import { useState } from 'react'
import './formularioRegistro.css'
export default function FormularioRegistro(){
    const registerSkater = async () => {
        try {
          if(skater.password === skater.passVerify){
            const res = await axios.post("http://localhost:3001/skaters", skater)
            console.log(res)
            alert('skater agregado')}
            else{
                alert('Las contraseñas no coinciden, por favor intentalo nuevamente')
            }
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
        <div className="RegisterForm">
            <div className='inputRegisterForm'>
                <label>Email:</label>
                <input name="email" value={skater.email} onChange={handleSkater}/>
            </div>
            <div className='inputRegisterForm'>
                <label>Nombre:</label>
                <input name='nombre' value={skater.nombre} onChange={handleSkater} />
            </div>
            <div className='inputRegisterForm'>
                <label>Contraseña:</label>
                <input name='password' value={skater.password} onChange={handleSkater} />
            </div>
            <div className='inputRegisterForm'>
                <label>Repita la contraseña:</label>
                <input name='passVerify' value={skater.passVerify} onChange={handleSkater} />
            </div>
            <div className='inputRegisterForm'>
                <label>Años de experiencia:</label>
                <input name='anos_experiencia' value={skater.anos_experiencia} onChange={handleSkater} />
            </div>
            <div className='inputRegisterForm'>
                <label>Especialidad:</label>
                <input name='especialidad' value={skater.especialidad} onChange={handleSkater} />
            </div>
            <div className='inputRegisterForm'>
                <label>Foto de perfil:</label>
                <input type="file" name='foto' value={skater.foto} onChange={handleSkater}/>
            </div>
            <div className='buttonRegisterForm'>
                <button onClick={registerSkater}>Registrarse</button>
            </div>
        </div>
    )
}