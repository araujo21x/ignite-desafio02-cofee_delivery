import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCoffee = styled.h1`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 2rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
`;

export const CoffeesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
