export default interface ICoffee {
  id: number;
  image?: string;
  attributes: string[];
  name: string;
  description: string;
  valueBase: number;
  // eslint-disable-next-line semi
}
