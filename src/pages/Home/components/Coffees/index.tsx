import {
  AttributeCoffeesContainer,
  CoffeeContainer,
  TitleCoffee,
  DescriptionCoffee,
  FormContainer,
  FormValueCoffee,
  ValueContainer,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import ICoffee from "../../../../utils/interfaces/ICoffee";
import { ChangeEvent, useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

interface CoffeesProps {
  coffee: ICoffee;
}

export function Coffees({ coffee }: CoffeesProps) {
  const { addProduct } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(0);

  function handlerQuantity(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setQuantity(Number(event.target.value));
  }

  function handleAddProduct(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    addProduct(coffee, quantity);
  }

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="" />
      <AttributeCoffeesContainer>
        {coffee.attributes.map((attribute: string) => (
          <p key={attribute}>{attribute}</p>
        ))}
      </AttributeCoffeesContainer>
      <TitleCoffee>{coffee.name}</TitleCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <FormContainer>
        <ValueContainer>
          <p>R$</p>
          <h1>
            {coffee.valueBase.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </h1>
        </ValueContainer>

        <FormValueCoffee onSubmit={handleAddProduct}>
          <input
            type="number"
            name="comment"
            placeholder="1"
            value={quantity}
            onChange={handlerQuantity}
            min={1}
            max={100}
            required
          />

          <button type="submit">
            <ShoppingCart size={24} weight="fill" />
          </button>
        </FormValueCoffee>
      </FormContainer>
    </CoffeeContainer>
  );
}
