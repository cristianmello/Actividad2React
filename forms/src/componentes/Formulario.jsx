import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre : '',
        edad : ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log("Nombre: " + datos.nombre + "\n" 
        + "edad: " + datos.edad)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={enviarDatos}>
                <div >
                    <input 
                    type="text" 
                    name="nombre" 
                    placeholder='Ingrese nombre'
                    onChange ={handleInputChange}></input>
                </div>
                <div >
                    <input 
                    type ="number" 
                    name="edad" 
                    placeholder='Ingrese numero'
                    onChange ={handleInputChange}
                    max = '120'></input>
                </div>
                <div >
                    <button type="submit"> Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;