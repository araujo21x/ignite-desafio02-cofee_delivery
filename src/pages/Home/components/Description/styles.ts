import styled from "styled-components";

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7rem;
  margin-bottom: 7rem;

  @media (max-width: 1024px) {
    img {
      width: 28vh;
    }
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      margin-top: 1rem;
      width: 24vh;
    }
  }
`;

export const InformationContainer = styled.div`
  margin-right: 2rem;
`;

export const TextContainer = styled.div`
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 4vw;
    font-family: "Baloo 2", sans-serif;
    line-height: 4.5vw;
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.7vw;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3vw;
      line-height: 4vw;
    }

    p {
      margin-top: 0.8rem;
      font-size: 1.6vw;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1.7rem;
      line-height: 7vw;
    }

    p {
      margin-top: 0.8rem;
      font-size: 1rem;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (max-width: 425px) {
    /* margin-top: 1.5rem; */

    p {
      font-size: 0.8rem;
    }
  }
`;

export const ItensList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1rem;

  font-size: 1.2vw;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;

  border-radius: 50%;
  color: ${(props) => props.theme.white};
`;

export const CartIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const PackageIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme["base-text"]};
`;

export const TimerIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme.yellow};
`;

export const CoffeeIcon = styled(IconContainer)`
  background-color: ${(props) => props.theme.purple};
`;
