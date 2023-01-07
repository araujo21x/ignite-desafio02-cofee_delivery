import { Bank, CreditCard, Money } from "phosphor-react";
import { BaseButton } from "./styled";

interface IMethodButtonProps {
  iconType: string;
  nameMethod: string;
}

export function ButtonMethod({ iconType, nameMethod }: IMethodButtonProps) {
  return (
    <div>
      <BaseButton type="button">
        {iconType === `1` ? (
          <CreditCard color="#8047F8" size={24} />
        ) : iconType === `2` ? (
          <Bank color="#8047F8" size={24} />
        ) : (
          <Money color="#8047F8" size={24} />
        )}
        {nameMethod}
      </BaseButton>
    </div>
  );
}
