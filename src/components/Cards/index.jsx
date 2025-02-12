import React from "react";
import { Card, ImageProduct, Name, Link} from "./style";

const Cards = ({ produtoImg, produtoNome, link }) => {
  return (
    <Link href={link}>
      <Card>
        <ImageProduct src={produtoImg} alt="imagem" />
        <Name>{produtoNome}</Name>
      </Card>
    </Link>
  );
};

export default Cards;
