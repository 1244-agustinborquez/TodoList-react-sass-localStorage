import React from 'react'
import { tareaContainer } from './styles.module.scss';
import Tarea from '../Tareas';
function ListaDeTareas({tareas,removeTarea}) {
    return (
        <div className={tareaContainer}>
            {
                tareas && tareas.map(({titulo,descripcion,id})=> <Tarea titulo={titulo} descripcion={descripcion} removeTarea={() => removeTarea(id)} />)
            }
        </div>
    )
}

export default ListaDeTareas
