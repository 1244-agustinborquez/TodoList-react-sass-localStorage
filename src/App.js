import { useState,useEffect } from 'react';
import { main } from './App.module.scss';
import Form from './components/Form';
import ListaDeTareas from './components/ListaDeTareas';

function App() {

  const [tareas, setTareas] = useState(() => {
    try {
      const tareasEnLocalStorage = localStorage.getItem('tareas');
      return tareasEnLocalStorage ? JSON.parse(tareasEnLocalStorage) : [] ;
    } catch (error) {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }, [tareas])

  const [tarea, setTarea] = useState({
    id: Math.random() * (9999999999 - 0) + 0,
    titulo: '',
    descripcion: ''
  });

  const { titulo, descripcion } = tarea;

  const addTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  }
  const onChange = (e) => {
    setTarea({...tarea, [e.target.name]: e.target.value});
  }

  const removeTarea = (id) => {
    const newTareas = [...tareas].filter(tarea => tarea.id !== id);
    setTareas(newTareas);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (titulo === "" || descripcion === "") {
      alert("Debes completar los dos campos");
    } else {
      addTarea(tarea);
      setTarea({
        id: Math.random() * (99999999999 - 0) + 0,
        titulo: "",
        descripcion: "",
      });
    }
  };
  return (
    <main className={main}>
      <Form onChange={onChange} tarea={tarea} onSubmit={onSubmit}/>
      <ListaDeTareas tareas={tareas} removeTarea={removeTarea}/>
    </main>
  );
} 

export default App;
