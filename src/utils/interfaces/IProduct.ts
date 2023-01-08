import ICoffee from "./ICoffee";

export default interface IProduct {
  id: number;
  coffee: ICoffee;
  valueBase: number;
  amountValue: number;
  quantity: number;
  // eslint-disable-next-line semi
}
