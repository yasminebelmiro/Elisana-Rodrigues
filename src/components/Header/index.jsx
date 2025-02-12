import React from "react";
import {
  Button,
  ContainerHeader,
  Hamburger,
  Item,
  Left,
  Right,
  Title,
} from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerHeader>
      <Left>
        <Title>Elisana Rodrigues</Title>
      </Left>
      <Hamburger onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </Hamburger>
      <Right className={isOpen ? "open" : ""}>
        <Item>Sobre mim</Item>
        <Item>Catálogo</Item>
        <Item>Contatos</Item>
        <a href="https://www.b2cstore.com.br/?parceiro=42421">
          <Button>Compre na loja</Button>
        </a>
        <a href="https://wa.me/c/556493113211">
          <Button>Fale comigo</Button>
        </a>
        <a href="https://chat.whatsapp.com/H46U3aGKNfiLDJIdQlVOBf?fbclid=PAZXh0bgNhZW0CMTEAAaYVa50wgvMCT0hCzXQkeStWDG9owL6ueqi17DWKDQYjgPThuDL0gA4cJR8_aem_tNmXi7Gt6OIgzjDcRy9AUw">
          <Button>Grupo VIP</Button>
        </a>
      </Right>
    </ContainerHeader>
  );
};

export default Header;
