import axios from 'axios'
import { useState } from 'react'
import './formularioDatosPerfil.css'
export default function FormularioDatosDePerfil(){
    const updateSkater = async () => {
        try {
          if(skater.password === skater.passVerify){
            const res = await axios.put("http://localhost:3001/skaters",skater, {   
                headers:{
                    'Authorization': localStorage.getItem('token')
                    }
            })
            console.log(res)
            alert('Datos de skater actualizados')}
            else{
                alert('Las contraseñas no coinciden, por favor intentalo nuevamente')
            }
        } catch (error) {
            alert('algo salió mal :(. Prueba iniciando sesión nuevamente')
            console.log(error)
        }
    }

    const deleteSkater = async () => {
        try {

            if(skater.password === skater.passVerify){
            const url = `http://localhost:3001/skaters/${skater.email}`
            console.log(url)
              const res = await axios.delete(url)
              console.log(res)
              alert('Skater eliminado :(')}
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
        <div className="ProfileForm">
            <div className='inputProfileForm'>
                <label>Email:</label>
                <input name="email" value={skater.email} onChange={handleSkater}/>
            </div>
            <div className='inputProfileForm'>
                <label>Nombre:</label>
                <input name='nombre' value={skater.nombre} onChange={handleSkater} />
            </div>
            <div className='inputProfileForm'>
                <label>Contraseña:</label>
                <input name='password' value={skater.password} onChange={handleSkater} />
            </div>
            <div className='inputProfileForm'>
                <label>Repita la contraseña:</label>
                <input name='passVerify' value={skater.passVerify} onChange={handleSkater} />
            </div>
            <div className='inputProfileForm'>
                <label>Años de experiencia:</label>
                <input name='anos_experiencia' value={skater.anos_experiencia} onChange={handleSkater} />
            </div>
            <div className='inputProfileForm'>
                <label>Especialidad:</label>
                <input name='especialidad' value={skater.especialidad} onChange={handleSkater} />
            </div>
            <div className='buttonProfileForm'>
                <button className='Update' onClick={updateSkater}>Actualizar</button>
                <button className='Delete' onClick={deleteSkater}>Eliminar</button>
            </div>
        </div>
    )
}