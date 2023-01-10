import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddressFormData,
  AddressValidationSchema,
} from "./validator/AddressValidator";
import {
  CartContainer,
  CartInformationContainer,
  PersonalInformationContainer,
} from "./styles";
import { AddressForm } from "./components/AddressForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { CoffeesCart } from "./components/CoffeesCart";
import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import IAddress from "../../utils/interfaces/IAddress";

export function Cart() {
  // atualizar componente
  const [, updateState] = useState({});
  function forceUpdate() {
    updateState({});
  }

  // address
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressValidationSchema),
    defaultValues: {
      zipCode: "",
      address: "",
      number: "",
      complemente: null,
      district: "",
      city: "",
      uf: "",
    },
  });
  const { handleSubmit, reset } = addressForm;

  // method
  const [method, setMethod] = useState("");
  function changeMethod(newMethod: string) {
    setMethod(newMethod);
  }

  const { updateAddress, updateMethod, order } = useContext(OrderContext);
  function handlerCreateCart(data: AddressFormData) {
    updateAddress(data as IAddress);
    updateMethod(method);
    setMethod("");
    forceUpdate();
    reset();

    console.log(order);
  }

  return (
    <CartContainer>
      <form id="a-form" onSubmit={handleSubmit(handlerCreateCart)}>
        <PersonalInformationContainer>
          <h1>Complete seu pedido</h1>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>

          <PaymentMethod method={method} onChangeMethod={changeMethod} />
        </PersonalInformationContainer>

        <CartInformationContainer>
          <h1>Cafés selecionados</h1>

          <CoffeesCart updateState={forceUpdate} />
        </CartInformationContainer>
      </form>
    </CartContainer>
  );
}
