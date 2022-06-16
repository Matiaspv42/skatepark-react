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

    const aprobarSkater = async () =>{
        try {
            const data = await axios.put('http://localhost:3001/aprobarSkater')
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