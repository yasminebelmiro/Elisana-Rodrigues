import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "../Cards";
import {
  CatalogoContainer,
  CardsContainer,
  Row,
  Text,
  Title,
  More,
} from "./style";

import { arrayProdutos } from "../../assets/database/arrayProdutos";

const Catalogo = () => {
  return (
    <CatalogoContainer>
      <Row>
        <Title>Catálogo</Title>
        <More>
          <Text href="https://www.b2cstore.com.br/?parceiro=42421">
            Ver tudo
          </Text>
          <FaArrowRightLong />
        </More>
      </Row>
      <CardsContainer>
        {arrayProdutos.map((currentObj) => (
          <Cards {...currentObj} key={currentObj.id} />
        ))}
      </CardsContainer>
    </CatalogoContainer>
  );
};

export default Catalogo;
