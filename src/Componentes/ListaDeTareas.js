import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../Hojas-de-estilo/ListaDeTareas.css'

function ListaDeTareas(){
    return(

        <>
          <TareaFormulario />
          <div className="tareas-lista-contenedor">
            Lista de tareas
          </div>
    
        </>

    )
}

export default ListaDeTareas;
