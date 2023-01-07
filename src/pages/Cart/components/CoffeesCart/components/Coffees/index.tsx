import {
  CoffeeContainer,
  InputContainer,
  Inputs,
  RemoveButton,
  ImgButtonContainer,
} from "./styles";
import ImageCoffee from "../../../../../../assets/coffees/arabe.svg";
import { Trash } from "phosphor-react";
import ButtonQuantity from "../../../../../../components/buttonQuantity";
export function Coffees() {
  return (
    <CoffeeContainer>
      <ImgButtonContainer>
        <img src={ImageCoffee} alt="" />
        <InputContainer>
          <p>Expresso Tradicional</p>
          <Inputs>
            <ButtonQuantity></ButtonQuantity>
            <RemoveButton type="button">
              <Trash size={18} color="#8047F8" />
              REMOVER
            </RemoveButton>
          </Inputs>
        </InputContainer>
      </ImgButtonContainer>

      <p>R$ 9,90</p>
    </CoffeeContainer>
  );
}
