import React from "react";
import ybera from "../../assets/logo-ybera.png";
import fashiongold from "../../assets/logo-fashiongold.png";
import terracoco from "../../assets/logo-terracoco.png";
import b2c from "../../assets/logo-b2c.png";
import { ContainerMarcas, Logos } from "./style";

const Marcas = () => {
  return (
    <ContainerMarcas>
      <a href="https://www.b2cstore.com.br/fabricante/ybera-paris/?parceiro=42421">
        <Logos src={ybera} alt="Marca Ybera" />
      </a>
      <a href="https://www.b2cstore.com.br/fabricante/fashion-gold/?parceiro=42421">
        <Logos src={fashiongold} alt="Marca Fashion Gold" />
      </a>
      <a href="https://www.b2cstore.com.br/fabricante/terra-coco/?parceiro=42421">
        <Logos src={terracoco} alt="Marca Terra Coco" />
      </a>
      <a href="https://www.b2cstore.com.br/?parceiro=42421">
        <Logos src={b2c} alt="Marca B2C Store" />
      </a>
    </ContainerMarcas>
  );
};

export default Marcas;
