import { createContext, ReactNode, useReducer, useState } from "react";
import ICoffee from "../utils/interfaces/ICoffee";
import IOrder from "../utils/interfaces/IOrder";
import IProduct from "../utils/interfaces/IProduct";

interface OrderContextProviderProps {
  children: ReactNode;
}

export interface OrderContextType {
  order: IOrder;
  finishedOrder: () => void;
  addProduct: (coffee: ICoffee, quantity: number) => void;
  removeProduct: (id: number) => void;
  updateQuantityProduct: (id: number, quantity: number) => void;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, SetOrder] = useState<IOrder>({
    address: {
      address: "",
      zipCode: "",
      number: "",
      complemente: "",
      district: "",
      city: "",
      uf: "",
    },
    methodPayment: "",
    products: [],
    deliveryTax: 0,
    amountProducts: 0,
    amount: 0,
  });

  function finishedOrder() {
    SetOrder((state) => {
      order.amount = 0;
      order.amountProducts = 0;
      order.products = [];
      order.methodPayment = "";

      return state;
    });
  }

  function addProduct(coffee: ICoffee, quantity: number) {
    const productIndex = order.products.findIndex(
      (product) => product.id === coffee.id
    );

    if (productIndex === -1) {
      const newProduct: IProduct = {
        id: coffee.id,
        coffee,
        valueBase: coffee.valueBase,
        quantity,
        amountValue: quantity * coffee.valueBase,
      };

      order.products.push(newProduct);
    } else {
      order.products[productIndex].valueBase = coffee.valueBase;
      order.products[productIndex].amountValue = quantity * coffee.valueBase;
      order.products[productIndex].quantity = quantity;
    }

    order.amountProducts = 0;
    order.products.forEach((element: IProduct) => {
      order.amountProducts += element.amountValue;
    });

    order.amount = order.amountProducts + order.deliveryTax;
    SetOrder(order);
  }

  function removeProduct(id: number) {
    const newProducts = order.products.filter((product) => product.id !== id);
    order.products = newProducts;

    order.amountProducts = 0;
    order.products.forEach((element: IProduct) => {
      order.amountProducts += element.amountValue;
    });

    order.amount = order.amountProducts + order.deliveryTax;
    SetOrder(order);
  }

  function updateQuantityProduct(id: number, quantity: number) {
    const productIndex = order.products.findIndex(
      (product) => product.id === id
    );

    order.products[productIndex].amountValue =
      quantity * order.products[productIndex].coffee.valueBase;
    order.products[productIndex].quantity = quantity;

    order.amountProducts = 0;
    order.products.forEach((element: IProduct) => {
      order.amountProducts += element.amountValue;
    });

    order.amount = order.amountProducts + order.deliveryTax;
    SetOrder(order);
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        finishedOrder,
        addProduct,
        removeProduct,
        updateQuantityProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
