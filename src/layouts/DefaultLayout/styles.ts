import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100%;
  /* height: 110vh; */
  margin: 2rem 8rem 8rem 8rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 1.5rem 4rem 4rem 4rem;
  }

  @media (max-width: 425px) {
    margin: 1rem;
    height: 95vh;
  }
`;
