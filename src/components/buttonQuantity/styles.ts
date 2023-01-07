import styled from "styled-components";

export const ButtonQuantityContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  border-radius: 6px;
  height: 2rem;
  width: 5.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  border: 0;
  height: 100%;
  width: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
