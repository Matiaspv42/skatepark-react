import './formularioRegistro.css'
export default function FormularioRegistro(){
    return(
        <div className="RegisterForm">
            <div className='inputRegisterForm'>
                <label>Email:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Nombre:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Contraseña:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Repita la contraseña:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Años de experiencia:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Especialidad:</label>
                <input/>
            </div>
            <div className='inputRegisterForm'>
                <label>Foto de perfil:</label>
                <input type="file"/>
            </div>
            <div className='buttonRegisterForm'>
                <button>Registrarse</button>
            </div>
        </div>
    )
}