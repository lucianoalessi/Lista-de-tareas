import React, { useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../Hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tarea";



function ListaDeTareas(){


const [tareas, setTareas] = useState([]);


const agregarTarea = tarea => {
  if(tarea.texto.trim()){                                 //verifico que no sea una cadena vacia
    tarea.texto = tarea.texto.trim();                    //elimino espacios
    const tareasActualizadas = [tarea, ...tareas];      //agrego la nueva tarea al principio del arreglo
    setTareas(tareasActualizadas);                     //actualizo el estado
  }
}

const completarTarea = id => {
  const tareasActualizadas = tareas.map((tarea) => {
    if(tarea.id === id){
      tarea.completada = !tarea.completada;
    }
    return tarea;
  })
  setTareas(tareasActualizadas)
}


const eliminarTarea = id => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  setTareas(tareasActualizadas)
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
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
                />
              )
            }
          </div>
    
        </>

    )
}

export default ListaDeTareas;
