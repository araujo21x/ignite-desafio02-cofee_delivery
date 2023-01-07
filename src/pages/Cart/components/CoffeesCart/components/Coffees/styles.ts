import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  width: 100%;
  gap: 0.4rem;
  img {
    width: 4rem;
    height: auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.3rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.3rem;
  border-radius: 6px;
  font-size: 0.7rem;
  gap: 0.5rem;
  border: 0;
  height: 2rem;
`;

export const ImgButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 80%;
`;
