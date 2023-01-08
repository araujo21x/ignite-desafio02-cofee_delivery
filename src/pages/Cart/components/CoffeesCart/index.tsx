import { useContext, useEffect } from "react";
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

export function CoffeesCart({ updateState }: any) {
  const { order } = useContext(OrderContext);

  return (
    <CoffeesCartContainer>
      <CoffeesComponentContainer>
        {order.products.map((product) => {
          return (
            <Coffees
              key={product.id}
              product={product}
              updateState={updateState}
            />
          );
        })}
      </CoffeesComponentContainer>

      <BottomContainer>
        <SubTitleContainer>
          <p>Total de itens</p>
          <p>
            {order.amountProducts.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </SubTitleContainer>

        <SubTitleContainer>
          <p>Entrega</p>
          <p>
            {order.deliveryTax.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </SubTitleContainer>

        <TitleContainer>
          <p>Total</p>
          <p>
            {order.amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </TitleContainer>
        <ButtonSubmit type="submit">CONFIRMAR PEDIDO</ButtonSubmit>
      </BottomContainer>
    </CoffeesCartContainer>
  );
}
