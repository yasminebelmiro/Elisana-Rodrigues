import styled from "styled-components";

export const Footer = styled.footer`
  width: 100wh;
  height: 200px;

  background-color: #e3d6d6;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Image = styled.img`
  margin-left: 30%;

  @media(max-width: 400px){
  width: 70px;
  }
`;

export const Right = styled.div`
  margin-right: 10%;
`;

export const Contact = styled.a`
  color: #7d615f;
  margin-right: 10px;

    @media(max-width: 400px){
        font-size: 15px;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 10px 0;
  font-family: "Julius Sans One";
  font-weight: bold;

  color: #7d615f;
`;
