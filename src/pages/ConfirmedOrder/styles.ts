import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 7rem;

  @media (max-width: 1024px) {
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    img {
      width: 18rem;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SubTitle = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ListAtributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3rem;
  padding: 3rem;
  height: 16.875rem;
  width: 32.875rem;

  border: 2px solid transparent;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;

  @media (max-width: 425px) {
    margin-top: 2rem;
    padding: 2rem;
    width: 20rem;
  }

  @media (max-width: 320px) {
    width: 17rem;
    font-size: 0.7rem;
  }
`;

export const Atributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const BaseSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  border-radius: 50px;
  padding: 0.4rem;
`;

export const MapPinIcon = styled(BaseSpan)`
  background-color: ${(props) => props.theme.purple};
`;

export const TimerIcon = styled(BaseSpan)`
  background-color: ${(props) => props.theme.yellow};
`;

export const CurrencyIcon = styled(BaseSpan)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const AtributesText = styled.div`
  display: flex;
  flex-direction: column;
`;
