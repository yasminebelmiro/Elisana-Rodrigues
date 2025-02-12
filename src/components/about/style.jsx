import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100wh;

  background-color: #e3d6d6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8% 25%;

  @media (max-width: 800px) {
    padding: 8% 10%;
  }
`;

export const Title = styled.h1`
  font-family: "Julius Sans One";
  font-size: 40px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-family: "Junge";
  font-size: 25px;
  margin-bottom: 30px;


  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
