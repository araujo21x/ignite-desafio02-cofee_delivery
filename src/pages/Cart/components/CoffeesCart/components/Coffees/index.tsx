import {
  CoffeeContainer,
  InputContainer,
  Inputs,
  RemoveButton,
  ImgButtonContainer,
} from "./styles";
import { Trash } from "phosphor-react";
import ButtonQuantity from "../../../../../../components/buttonQuantity";
import IProduct from "../../../../../../utils/interfaces/IProduct";
import { useContext } from "react";
import { OrderContext } from "../../../../../../contexts/OrderContext";

interface ICoffeesProps {
  product: IProduct;
}

export function Coffees({ product }: ICoffeesProps) {
  const { coffee } = product;
  const { updateQuantityProduct, removeProduct } = useContext(OrderContext);

  function handlerUpdateQuantity(quantity: number) {
    updateQuantityProduct(coffee.id, quantity);
  }

  function handlerRemover() {
    removeProduct(coffee.id);
  }

  return (
    <CoffeeContainer>
      <ImgButtonContainer>
        <img src={coffee.image} alt="" />
        <InputContainer>
          <p>{coffee.name}</p>
          <Inputs>
            <ButtonQuantity
              quantitytTeste={product.quantity}
              idProduct={coffee.id}
              onIncrement={handlerUpdateQuantity}
              onDecrement={handlerUpdateQuantity}
            ></ButtonQuantity>
            <RemoveButton type="button" onClick={handlerRemover}>
              <Trash size={18} color="#8047F8" />
              REMOVER
            </RemoveButton>
          </Inputs>
        </InputContainer>
      </ImgButtonContainer>

      <p>R$ {product.amountValue}</p>
    </CoffeeContainer>
  );
}
