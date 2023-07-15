import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tarea-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
      <div className='author'>
        Designed and Coded by
        <br/>
        <a href='https://www.linkedin.com/in/lucianoalessi/' target='_blank'>Luciano A. Alessi</a>
      </div> 
    </div>
  );
}

export default App;
