import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;
  width: 42rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: ${(props) => props.theme["yellow-dark"]};
  margin-bottom: 1rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const MethodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
