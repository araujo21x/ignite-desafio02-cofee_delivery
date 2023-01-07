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

interface CoffeesProps {
  coffee: ICoffee;
}

export function Coffees({ coffee }: CoffeesProps) {
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
          <h1>9,99</h1>
        </ValueContainer>

        <FormValueCoffee action="">
          <input
            type="number"
            name="comment"
            placeholder="1"
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
