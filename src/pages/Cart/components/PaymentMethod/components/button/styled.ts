import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  width: 11.1rem;
  height: 3.1rem;
  border-radius: 6px;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border: 0;
  font-size: 0.75rem;
`;
