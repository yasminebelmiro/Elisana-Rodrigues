import styled from "styled-components";

export const ContainerMarcas = styled.div`
  width: 100wh;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #a88784;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-items: center;
      padding:5% 0;
  }
`;

export const Logos = styled.img`
  width: 150px;

  @media (max-width: 900px) {
    width: 100px;
  }
`;