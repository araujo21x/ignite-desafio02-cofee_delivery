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

export function Cart() {
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

  function handlerCreateCart(data: AddressFormData) {
    console.log("mudei aqui");
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

          <PaymentMethod />
        </PersonalInformationContainer>

        <CartInformationContainer>
          <h1>Cafés selecionados</h1>

          <CoffeesCart />
        </CartInformationContainer>
      </form>
    </CartContainer>
  );
}
