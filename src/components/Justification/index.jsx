import React from "react";
import {
  ConatainerJustification,
  Colorful,
  Item,
  PersonalizedList,
  Title,
} from "./style";

const Justification = () => {
  return (
    <ConatainerJustification>
      <Title>Por que Escolher Meus Produtos?</Title>
      <PersonalizedList>
        <Item>
          <Colorful>Qualidade Profissional - </Colorful>Produtos testados por
          especialistas.
        </Item>
        <Item>
          <Colorful>Praticidade - </Colorful>Receba tudo no conforto da sua
          casa.
        </Item>
        <Item>
          <Colorful>Atendimento personalizado - </Colorful>Indicação dos
          melhores produtos para o seu cabelo.
        </Item>
        <Item>
          <Colorful>Promoções exclusivas - </Colorful>Desconto especiais para
          clientes.
        </Item>
      </PersonalizedList>
    </ConatainerJustification>
  );
};

export default Justification;
