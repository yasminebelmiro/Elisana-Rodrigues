import styled from "styled-components";

export const ContainerHero = styled.section`
  display: flex;
  align-items: center;

  width: 100wh;
  height: 70vh;
  padding: 0 10%;

  background-color: #a88784;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;

    padding: 10% 0;
    height: 40vh;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;

export const Left = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 40%;
  border-radius: 100%;
  border: 6px solid white;
  @media (max-width: 1100px) {
    width: 250px;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 40%;
  }
`;

export const Right = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  font-family: "Junge";

  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-family: "Julius Sans One";
  color: white;
  margin-left: 30%;

  @media (max-width: 1100px) {
   margin-left: 0%;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    margin-left: 0%;
    font-size: 0.8rem;
    text-align: center;
  }
`;
