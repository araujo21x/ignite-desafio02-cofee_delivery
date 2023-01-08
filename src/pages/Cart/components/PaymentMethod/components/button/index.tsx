import { Bank, CreditCard, Money } from "phosphor-react";
import { BaseButton } from "./styled";

interface IMethodButtonProps {
  changeMethod: (method: string) => void;
  nameMethod: string;
  currentMethod: string;
}

export function ButtonMethod({
  nameMethod,
  currentMethod,
  changeMethod,
}: IMethodButtonProps) {
  function renderButton() {
    switch (nameMethod) {
      case `CARTÃO DE CRÉDITO`:
        return <CreditCard color="#8047F8" size={24} />;
      case `CARTÃO DE DÉBITO`:
        return <Bank color="#8047F8" size={24} />;
      case `DINHEIRO`:
        return <Money color="#8047F8" size={24} />;
      default:
        return <Money color="#8047F8" size={24} />;
    }
  }
  return (
    <div>
      <BaseButton
        type="button"
        isSelect={currentMethod === nameMethod}
        onClick={() => changeMethod(nameMethod)}
      >
        {renderButton()}
        {nameMethod}
      </BaseButton>
    </div>
  );
}
