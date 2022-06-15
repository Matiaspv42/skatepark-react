import axios from "axios"
import { useState, useEffect } from "react"
export default function TablaParticipantes(){
    const [skaters, SetSkaters] = useState([])
    const getSkaters = async () => {
        console.log('buscando skaters')
        const data = await axios.get("http://localhost:3001/skaters")
        SetSkaters([...data.data])
    }
  
    
    useEffect( () => { 
        getSkaters()
    },[])

    return(
        <table border="solid">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Años de experiencia</th>
                    <th>Especialidad</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {skaters.map(skater => 
                <tr>
                    <th>{skater.id}</th>
                    <th>{skater.email}</th>
                    <th>{skater.nombre}</th>
                    <th>{skater.anos_experiencia}</th>
                    <th>{skater.especialidad}</th>
                    <th><input type="checkbox" checked={(skater.estado === true)? 'checked':'unchecked'} onChange={e => console.log(e)}></input></th>
                </tr>)}
            </tbody>
        </table>
    )
}