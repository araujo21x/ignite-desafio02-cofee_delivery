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
import { useState } from "react";

export function Cart() {
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

  function handlerCreateCart(data: AddressFormData) {
    reset();
  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(handlerCreateCart)} action="">
        <PersonalInformationContainer>
          <h1>Complete seu pedido</h1>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>

          <PaymentMethod method={method} onChangeMethod={changeMethod} />
        </PersonalInformationContainer>

        <CartInformationContainer>
          <h1>Cafés selecionados</h1>

          <CoffeesCart />
        </CartInformationContainer>
      </form>
    </CartContainer>
  );
}
