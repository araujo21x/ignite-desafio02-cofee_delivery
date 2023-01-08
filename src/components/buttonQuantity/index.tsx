import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import ICoffee from "../../utils/interfaces/ICoffee";
import { Button, ButtonQuantityContainer } from "./styles";

interface IButtonQuantityProps {
  quantitytTeste: number;
  idProduct: number;
  onIncrement: (quantity: number) => void;
  onDecrement: (quantity: number) => void;
}
export default function ButtonQuantity({
  quantitytTeste,
  onIncrement,
  onDecrement,
}: IButtonQuantityProps) {
  const [quantity, setQuantity] = useState(quantitytTeste);
  function handlerIncrementQuantity() {
    let value = quantity + 1;
    if (value > 999) value = 999;
    setQuantity((oldState) => oldState + 1);
    onIncrement(value);
  }

  function handlerDecrementQuantity() {
    let value = quantity - 1;
    if (value < 1) value = 1;
    setQuantity((oldState) => oldState - 1);
    onDecrement(value);
  }

  return (
    <ButtonQuantityContainer>
      <Button onClick={handlerDecrementQuantity}>
        <Minus size={14} weight={"bold"} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={handlerIncrementQuantity}>
        <Plus size={14} weight={"bold"} />
      </Button>
    </ButtonQuantityContainer>
  );
}
