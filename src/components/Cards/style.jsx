import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    width: 150px;
    height: 200px;
  }
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 85%;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const Name = styled.p`
  font-family: "Junge";
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: underline;
  }
`;
