import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-top: 1.5rem;
  border-radius: 6px;
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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BaseInput = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-label"]};
  padding: 0.5rem;
  font-size: 0.875rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    box-shadow: none;
  }
`;

export const VerySmallInput = styled(BaseInput)`
  width: 3.5rem;
`;

export const SmallInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const MediumInput = styled(BaseInput)`
  width: 17rem;
`;

export const LargeInput = styled(BaseInput)`
  width: 21.5rem;
`;

export const VeryLargeInput = styled(BaseInput)`
  width: 35rem;
`;

export const TestWrap = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
