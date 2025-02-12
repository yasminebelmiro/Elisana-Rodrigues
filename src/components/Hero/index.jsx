import React from "react";
import foto from "../../assets/elisana.jpg";
import { ContainerHero, Description, Img, Left, Right, Title } from "./style";

const Hero = () => {
  return (
    <ContainerHero>
      <Left>
        <Img src={foto} alt="Imagem de perfil" />
      </Left>
      <Right>
        <Title>Elisana Rodrigues</Title>
        <Description>Consutora de beleza capilar</Description>
      </Right>
    </ContainerHero>
  );
};

export default Hero;
