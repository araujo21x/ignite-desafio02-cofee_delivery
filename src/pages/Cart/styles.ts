import styled from "styled-components";

export const CartContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: row;

  form {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    form {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const PersonalInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const CartInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  max-height: 37.9rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
