import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;
export const ItensHeader = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const BaseNavLink = styled(NavLink)`
  border-radius: 8px;
  padding: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  @media (max-width: 425px) {
    font-size: 0.875rem;
    padding: 0.4rem;
  }
`;

export const AddressContainer = styled(BaseNavLink)`
  gap: 0.2rem;
  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.purple};
  }
`;

export const CartContainer = styled(BaseNavLink)`
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.yellow};
  }
`;
