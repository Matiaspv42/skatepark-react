import axios from "axios"
import { useState, useEffect } from "react"
export default function TablaParticipantes(){

    let aprobadoStyle = {
        color: "#198754"
        };

    const [skaters, SetSkaters] = useState([])
    const getSkaters = async () => {
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
                    <th><img src={skater.foto} alt="" width="100px"/></th>
                    <th>{skater.nombre}</th>
                    <th>{skater.anos_experiencia}</th>
                    <th>{skater.especialidad}</th>
                    <th
                    style={(skater.estado === true)? aprobadoStyle : undefined}
                    >{(skater.estado === true)? 'Aprobado':'En revisión'}</th>
                </tr>)}
            </tbody>
        </table>
    )
}