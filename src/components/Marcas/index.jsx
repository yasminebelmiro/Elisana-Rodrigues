import React from 'react'
import ybera from "../../assets/logo-ybera.png"
import fashiongold from "../../assets/logo-fashiongold.png"
import terracoco from "../../assets/logo-terracoco.png"
import b2c from "../../assets/logo-b2c.png"
import { ContainerMarcas, Logos } from './style'

const Marcas = () => {
  return (
    <ContainerMarcas>
        <Logos src={ybera} alt="Marca Ybera" />
        <Logos src={fashiongold} alt="Marca Fashion Gold" />
        <Logos src={terracoco} alt="Marca Terra Coco" />
        <Logos src={b2c} alt="Marca B2C Store" />
    </ContainerMarcas>
  )
}

export default Marcas