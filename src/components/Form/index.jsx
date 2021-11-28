import React from 'react'
import { 
    formContainer,
    inputContainer,
    form,tituloInput,
    descripcionInput,
    agregar } from './styles.module.scss'

function Form({onChange,tarea,onSubmit}) {
    const {titulo,descripcion} = tarea
    return (
        <div className={formContainer}>
            <h2>Lista De Tareas</h2>
            <form onSubmit={(e) => onSubmit(e)} className={form}>
                <h3>Agrega Una Tarea</h3>
                <div className={inputContainer}>
                    <input  value={titulo} name='titulo' type="text" placeholder='Titulo...' className={tituloInput} onChange={(e) => onChange(e)}/>
                    <textarea value={descripcion} name='descripcion' className={descripcionInput} placeholder='Descripcion...' onChange={(e) => onChange(e)}></textarea>
                    <button className={agregar}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Form
