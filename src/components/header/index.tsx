import {
  AddressContainer,
  CartContainer,
  HeaderContainer,
  ItensHeader,
} from "./styles";
import logoCoffee from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <ItensHeader>
        <AddressContainer to="/confirmedOrder" title="Home">
          <MapPin size={24} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressContainer>

        <CartContainer to="/cart" title="Carrinho">
          <ShoppingCart size={24} weight="fill" />
        </CartContainer>
      </ItensHeader>
    </HeaderContainer>
  );
}
