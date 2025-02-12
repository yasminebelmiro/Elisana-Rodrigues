import styled from "styled-components";

export const CatalogoContainer = styled.div`
  width: 100wh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #a88784;
  padding: 2% 10%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Title = styled.h1`
  font-family: "Julius Sans One";

  @media (max-width: 654px){
  font-size: 25px;
  }
`;

export const More = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;
export const Text = styled.a`
  font-family: "Julius Sans One";
  margin-right: 15px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  padding: 50px;
  gap: 50px;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1300px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 654px) {
    grid-template-columns: auto auto;
    padding:50px 0px;
  }
`;
