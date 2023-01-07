import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Button, ButtonQuantityContainer } from "./styles";

export default function ButtonQuantity() {
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity((state) => {
      let value = state + 1;
      if (value > 999) value = 999;

      return value;
    });
  }

  function decrementQuantity() {
    setQuantity((state) => {
      let value = state - 1;
      if (value < 1) value = 1;

      return value;
    });
  }

  return (
    <ButtonQuantityContainer>
      <Button onClick={decrementQuantity}>
        <Minus size={14} weight={"bold"} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={incrementQuantity}>
        <Plus size={14} weight={"bold"} />
      </Button>
    </ButtonQuantityContainer>
  );
}
