import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../Hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tarea";


function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    //verifico que no sea una cadena vacia
    if(tarea.texto.trim()){ 
      //elimino espacios                                
      tarea.texto = tarea.texto.trim();
      //agrego la nueva tarea al principio del arreglo
      const tareasActualizadas = [tarea, ...tareas];
      //actualizo el estado      
      setTareas(tareasActualizadas);                     
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
