import axios from "axios"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../AuthContext"

export default function TablaParticipantes(){
    const {token,setToken} = useContext(AuthContext)

    const [skaters, SetSkaters] = useState([])
    const getSkaters = async () => {
       try{
        const data = await axios.get("http://localhost:3001/skaters",{
            headers:{
                'Authorization': localStorage.getItem('token')
                },
            })
            SetSkaters([...data.data])
        }catch(error){
           alert('Hay un error: '+ error.response.data.error + '. Intente iniciar sesión nuevamente')
        }
        
    }  
    useEffect( () => { 
        getSkaters()
    },[])
    const updateStateSkater = async (id) =>{
        try {
            const data = await axios.put('http://localhost:3001/aprobarSkater',[id],{   
                headers:{
                    'Authorization': localStorage.getItem('token')
                    }
                })
            const skaters = await axios.get("http://localhost:3001/skaters",{
                headers:{
                    'Authorization': localStorage.getItem('token')
                    },
                })
                SetSkaters([...skaters.data])
        } catch (error) {
            
        }
    }

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
                    <th><input type="checkbox" checked={skater.estado} onChange={e=>updateStateSkater(e.target.id)} id={skater.id}></input></th>
                </tr>)}
            </tbody>
        </table>
    )
}