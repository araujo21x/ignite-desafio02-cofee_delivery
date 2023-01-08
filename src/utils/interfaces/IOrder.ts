import IAddress from "./IAddress";
import IProduct from "./IProduct";

export default interface IOrder {
  address: IAddress;
  methodPayment: string;
  products: IProduct[];
  deliveryTax: number;
  amountProducts: number;
  amount: number;
  // eslint-disable-next-line semi
}
