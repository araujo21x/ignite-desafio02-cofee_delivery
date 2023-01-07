import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  FormContainer,
  InputsContainer,
  LargeInput,
  MediumInput,
  SmallInput,
  TestWrap,
  TextContainer,
  Texts,
  VeryLargeInput,
  VerySmallInput,
} from "./styles";

export function AddressForm() {
  const { register } = useFormContext();
  return (
    <FormContainer>
      <TextContainer>
        <MapPinLine size={24} />
        <Texts>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Texts>
      </TextContainer>
      <InputsContainer>
        <SmallInput id="zipCode" placeholder="CEP" {...register("zipCode")} />

        <VeryLargeInput
          id="address"
          placeholder="Rua"
          {...register("address")}
        />

        <TestWrap>
          <SmallInput
            id="number"
            placeholder="Número"
            {...register("number")}
          />

          <LargeInput
            id="complement"
            placeholder="Complemento"
            {...register("complement")}
          />

          <SmallInput
            id="district"
            placeholder="Bairro"
            {...register("district")}
          />

          <MediumInput id="city" placeholder="cidade" {...register("city")} />

          <VerySmallInput id="uf" placeholder="UF" {...register("uf")} />
        </TestWrap>
      </InputsContainer>
    </FormContainer>
  );
}
