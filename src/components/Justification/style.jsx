import styled from "styled-components";

export const ConatainerJustification = styled.div`
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
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

export const PersonalizedList = styled.ul`
  font-family: "Junge";
  font-size: 20px;
  list-style: none;
 

  @media (max-width: 600px) {
    font-size: 15px;
  }`;

export const Item = styled.li`
 margin-bottom: 30px;

  &::before {
    content: "★"; 
    color: #7D615F; 
    margin-right: 10px; 
    font-size: 1.5rem; 
  }
`;

export const Colorful = styled.strong`
  font-family: "Julius Sans One";
  color: #7D615F;
`;
