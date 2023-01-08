import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
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
  const { order } = useContext(OrderContext);
  return (
    <CoffeesCartContainer>
      <CoffeesComponentContainer>
        {order.products.map((product) => {
          return <Coffees key={product.id} product={product} />;
        })}
      </CoffeesComponentContainer>

      <BottomContainer>
        <SubTitleContainer>
          <p>Total de itens</p>
          <p>R$ {order.amountProducts}</p>
        </SubTitleContainer>

        <SubTitleContainer>
          <p>Entrega</p>
          <p>R$ {order.deliveryTax}</p>
        </SubTitleContainer>

        <TitleContainer>
          <p>Total</p>
          <p>R$ {order.amount}</p>
        </TitleContainer>
        <ButtonSubmit type="submit">CONFIRMAR PEDIDO</ButtonSubmit>
      </BottomContainer>
    </CoffeesCartContainer>
  );
}
