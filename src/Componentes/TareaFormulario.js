import React, {useState} from "react";
import '../Hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props) {

    const [input, setInput] = useState('')


    const manejarCambio = e => {
        setInput(e.target.value)
    }
    
    
    const manejarEnvio = e => {
      e.preventDefault();
      
      const nuevaTarea = {
        id: '123',
        texto: input,
        completada: false
    }
}


    return(
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={manejarCambio}/>
            <button className="tarea-boton"
            type="submit">
                Agregar Tarea
            </button>
        </form>
    )
}


export default TareaFormulario;