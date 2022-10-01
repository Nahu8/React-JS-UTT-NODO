import React from 'react'
import { useState, useEffect } from 'react'

const Contador = ({initial, stock}) => {
    const[contador, setContador]= useState(initial)

    const restar = () => {
        if (contador > initial){
        setContador (contador - 1)
    }
    }
    const sumar = () => {
        if(contador <= stock){
        setContador (contador + 1)
    }
};
    
    const agregarAMiBolsa = () =>
    {
        setContador(contador)
        console.log("Se agregó a su bolsa")
    };

    useEffect(() => {
        console.log("Estoy en uso :D");
        return() => {
            <h1>Hey!</h1>
        }
    }

    )


    
    return (
        <>
        <button onClick = {()=>restar()}> - </button>
        <span> {contador} </span>
        <button onClick = {()=>sumar()}> + </button>
        <button onClick = {()=>agregarAMiBolsa()}> Agregar A Mi Bolsa</button>
        </>
    )
}

export default Contador