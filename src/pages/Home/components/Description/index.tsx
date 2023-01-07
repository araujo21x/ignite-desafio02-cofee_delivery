import {
  CartIcon,
  CoffeeIcon,
  DescriptionContainer,
  InformationContainer,
  ItensList,
  ListContainer,
  PackageIcon,
  TextContainer,
  TimerIcon,
} from "./styles";
import descriptionImg from "../../../../assets/description-img.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Description() {
  return (
    <DescriptionContainer>
      <InformationContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextContainer>

        <ListContainer>
          <ItensList>
            <CartIcon>
              <ShoppingCart size={20} weight="fill" />
            </CartIcon>

            <p>Compra simples e segura</p>
          </ItensList>

          <ItensList>
            <PackageIcon>
              <Package size={20} weight="fill" />
            </PackageIcon>

            <p>Embalagem mantém o café intacto</p>
          </ItensList>

          <ItensList>
            <TimerIcon>
              <Timer size={20} weight="fill" />
            </TimerIcon>

            <p>Entrega rápida e rastreada</p>
          </ItensList>

          <ItensList>
            <CoffeeIcon>
              <Coffee size={20} weight="fill" />
            </CoffeeIcon>

            <p>O café chega fresquinho até você</p>
          </ItensList>
        </ListContainer>
      </InformationContainer>

      <img src={descriptionImg} alt="" />
    </DescriptionContainer>
  );
}
