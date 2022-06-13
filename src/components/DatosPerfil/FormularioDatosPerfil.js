import './formularioDatosPerfil.css'
export default function FormularioDatosDePerfil(){
    return(
        <div className="ProfileForm">
            <div className='inputProfileForm'>
                <label>Email:</label>
                <input/>
            </div>
            <div className='inputProfileForm'>
                <label>Nombre:</label>
                <input/>
            </div>
            <div className='inputProfileForm'>
                <label>Contraseña:</label>
                <input/>
            </div>
            <div className='inputProfileForm'>
                <label>Repita la contraseña:</label>
                <input/>
            </div>
            <div className='inputProfileForm'>
                <label>Años de experiencia:</label>
                <input/>
            </div>
            <div className='inputProfileForm'>
                <label>Especialidad:</label>
                <input/>
            </div>
            <div className='buttonProfileForm'>
                <button className='Update'>Actualizar</button>
                <button className='Delete'>Eliminar</button>
            </div>
        </div>
    )
}