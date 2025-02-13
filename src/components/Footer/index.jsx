import React from "react";
import { Contact, ContainerContact, Right, Footer, Image, Left } from "./style";
import logo from "../../assets/Logo.png";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const index = () => {
  return (
    <Footer>
      <Left>
        <Image src={logo} alt="" />
      </Left>
      <Right>
        <ContainerContact>
          <Contact href="https://www.instagram.com/cantinho_da_elisana/">
            cantinho_da_elisana
          </Contact>
          <FaInstagramSquare size={25} />
        </ContainerContact>
        <ContainerContact>
          <Contact href="https://wa.me/c/556493113211">64 9311-3211</Contact>
          <FaWhatsappSquare size={25} />
        </ContainerContact>
      </Right>
    </Footer>
  );
};

export default index;
