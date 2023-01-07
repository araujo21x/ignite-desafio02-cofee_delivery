import { CurrencyDollar } from "phosphor-react";
import { ButtonMethod } from "./components/button";
import {
  MethodsContainer,
  PaymentMethodContainer,
  TextContainer,
  Texts,
} from "./styles";

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <TextContainer>
        <CurrencyDollar size={24} />
        <Texts>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </Texts>
      </TextContainer>

      <MethodsContainer>
        <ButtonMethod iconType="1" nameMethod="CARTÃO DE CRÉDITO" />
        <ButtonMethod iconType="2" nameMethod="CARTÃO DE DÉBITO" />
        <ButtonMethod iconType="3" nameMethod="DINHEIRO" />
      </MethodsContainer>
    </PaymentMethodContainer>
  );
}
