import styled from "styled-components";

export const ContainerHeader = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #a88784;
  width: 100wh;
  height: 10vh;

  @media (max-width: 700px) {
    height: 8vh;
  }


`;

export const Left = styled.div`
  width: 30%;

  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-family: "Julius Sans One";
  margin-left: 5%;
  color: #ffffff;
  font-size: 1.5rem;


  @media (max-width: 900px) {
    font-size: 1rem;
  }
    
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;

  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-right: 0%;
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 8%;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    will-change: transform;

    &.open {
      transform: translateX(0);
    }
  }
`;

export const Item = styled.a`
  font-family: "Junge";
  margin: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  font-family: "Junge";
  width: 130px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #7d615f;
  margin: 0.5rem;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 110px;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    width: 200px;
    height: 40px;
    font-size: 1.3rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 5%;

  .line {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;
