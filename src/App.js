import './App.css';
import Tarea from './Componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tarea-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto='aprender react'/>
        <Tarea />
        <Tarea />
        

      </div>

    </div>
  );
}

export default App;
