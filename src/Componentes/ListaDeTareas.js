import React, { useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../Hojas-de-estilo/ListaDeTareas.css'

function ListaDeTareas(){

const [tareas, settareas] = useState([]);

const agregarTarea = tarea => {
  if(tarea.texto.trim()){                                 //verifico que no sea una cadena vacia
    tarea.texto = tarea.texto.trim();                    //elimino espacios
    const tareasActualizadas = [tarea, ...tareas];      //agrego la nueva tarea al principio del arreglo
    settareas(tareasActualizadas);                     //actualizo el estado
  }
}

const completarTarea = id => {
  const tareasActualizadas = tareas.map((tarea) => {
    if(tarea.id === id){
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  settareas(tareasActualizadas)
}

const eliminarTarea = id => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  settareas(tareasActualizadas);
}


return(
        <>
          <TareaFormulario onSubmit={agregarTarea} />
          <div className="tareas-lista-contenedor">
            {
              tareas.map((tarea) =>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                />
              )
            }
          </div>
    
        </>

    )
}

export default ListaDeTareas;
