import React from "react";
import { ContainerAbout, Paragraph, Title } from "./style";

const About = () => {
  return (
    <ContainerAbout>
      <Title>Sobre mim</Title>
      <Paragraph>
        Olá, eu sou a Elisana, afiliada apaixonada por cuidados capilares!
        Trabalho com marcas renomadas oferecendo produtos de alta qualidade para
        quem deseja ter cabelos saudáveis e deslumbrantes com resultado de
        salão, sem sair de casa.
      </Paragraph>
      <Paragraph>
        Meu compromisso é te ajudar a escolher os melhores produtos para o seu
        tipo de cabelo, tirar suas dúvidas e garantir que sua experiência de
        compra seja prática e segura. Além disso, sempre trago promoções
        exclusivas para que você tenha o melhor custo-benefício.
      </Paragraph>
      <Paragraph>
        Se você quer transformar seus fios com produtos profissionais e um
        atendimento atencioso, estou aqui para te ajudar!
      </Paragraph>
    </ContainerAbout>
  );
};

export default About;
