import { Coffees } from "./components/Coffees";
import {
  BottomContainer,
  ButtonSubmit,
  CoffeesCartContainer,
  CoffeesComponentContainer,
  SubTitleContainer,
  TitleContainer,
} from "./styles";

export function CoffeesCart() {
  return (
    <CoffeesCartContainer>
      <CoffeesComponentContainer>
        <Coffees />
        <Coffees />
      </CoffeesComponentContainer>

      <BottomContainer>
        <SubTitleContainer>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </SubTitleContainer>

        <SubTitleContainer>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </SubTitleContainer>

        <TitleContainer>
          <p>Total</p>
          <p>R$ 33,20</p>
        </TitleContainer>
        <ButtonSubmit type="submit">CONFIRMAR PEDIDO</ButtonSubmit>
      </BottomContainer>
    </CoffeesCartContainer>
  );
}
