import './administrador.css'
import TablaDeParticipantesAdministrador from "../components/Administrador/TablaDeParticipantesAdministrador";

export default function Administrador(){
    return(
        <div className="Administrador">  
            <h1>Administrador</h1>
            <TablaDeParticipantesAdministrador/>
        </div>
    )
}