import React from 'react'
import MiTitulo from './mi-titulo'
import { MiParrafo, MiTextoDelParrafo } from './mi-parrafo'


export const MiContenedor = () => {
  return (
    <> 
    <MiTitulo/>
    <MiParrafo/>
    <p>{MiTextoDelParrafo}</p>

    </>
  )
}
