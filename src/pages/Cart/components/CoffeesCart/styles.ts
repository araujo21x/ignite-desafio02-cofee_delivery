import styled from "styled-components";

export const CoffeesCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-top: 1.5rem;
  border-radius: 6px 44px 6px 44px;
  /* min-height: 29rem; */
  justify-content: space-between;
`;

export const CoffeesComponentContainer = styled.div``;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  /* border-top: 1px solid ${(props) => props.theme["base-button"]}; */
  padding-top: 1.3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitleContainer = styled(TextContainer)`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const TitleContainer = styled(TextContainer)`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: bold;
`;

export const ButtonSubmit = styled.button`
  height: 3rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  margin-top: 0.3rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  font-size: 0.875rem;
  font-weight: bold;
`;
