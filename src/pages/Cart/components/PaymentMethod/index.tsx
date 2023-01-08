import { CurrencyDollar } from "phosphor-react";
import { useState } from "react";
import { ButtonMethod } from "./components/button";
import {
  MethodsContainer,
  PaymentMethodContainer,
  TextContainer,
  Texts,
} from "./styles";

interface IMethodProps {
  method: string;
  onChangeMethod: (newMethod: string) => void;
}

export function PaymentMethod({ method, onChangeMethod }: IMethodProps) {
  function handlerChangeMethod(newMethod: string) {
    onChangeMethod(newMethod);
  }

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
        <ButtonMethod
          nameMethod="CARTÃO DE CRÉDITO"
          currentMethod={method}
          changeMethod={handlerChangeMethod}
        />
        <ButtonMethod
          nameMethod="CARTÃO DE DÉBITO"
          currentMethod={method}
          changeMethod={handlerChangeMethod}
        />
        <ButtonMethod
          nameMethod="DINHEIRO"
          currentMethod={method}
          changeMethod={handlerChangeMethod}
        />
      </MethodsContainer>
    </PaymentMethodContainer>
  );
}
