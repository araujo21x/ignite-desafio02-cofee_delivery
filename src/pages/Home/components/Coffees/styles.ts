import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  height: 19.5rem;
  width: 16rem;
  border-radius: 6px 36px 6px 36px;
  padding: 1.5rem;

  img {
    margin-top: calc(0px - 1.5rem - 1.2rem);
  }
`;

export const AttributeCoffeesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme["yellow-dark"]};

  p {
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 100px;
    padding: 0.4rem;
    font-size: 1.1vh;
    font-weight: bold;
  }
`;

export const TitleCoffee = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: bold;
`;

export const DescriptionCoffee = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 0.4rem;

  justify-content: center;
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    margin-right: 0.2rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-text"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    margin-bottom: -0.58rem;
  }
`;

export const FormValueCoffee = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  gap: 0.4rem;

  input {
    display: flex;

    font-size: 1rem;
    border-radius: 6px;
    height: 2.25rem;
    width: 3.25rem;
    padding: 0.3rem;
    background-color: ${(props) => props.theme["base-button"]};
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    width: 2.25rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    border-radius: 6px;
    border: 0.5px solid ${(props) => props.theme["base-text"]};
  }
`;
