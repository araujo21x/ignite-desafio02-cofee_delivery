import ICoffee from "../utils/interfaces/ICoffee";

const coffees: ICoffee[] = [
  {
    id: 1,
    image: "src/assets/coffees/expresso-tradicional.svg",
    attributes: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    valueBase: 9.9,
  },
  {
    id: 2,
    image: "src/assets/coffees/expresso-americano.svg",
    attributes: ["TRADICIONAL"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    valueBase: 9.9,
  },
  {
    id: 3,
    image: "src/assets/coffees/expresso-cremoso.svg",
    attributes: ["TRADICIONAL"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    valueBase: 9.9,
  },
  {
    id: 4,
    image: "src/assets/coffees/expresso-gelado.svg",
    attributes: ["TRADICIONAL", "GELADO"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    valueBase: 9.9,
  },
  {
    id: 5,
    image: "src/assets/coffees/cafe-com-leite.svg",
    attributes: ["TRADICIONAL", "COM LEITE"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    valueBase: 9.9,
  },
  {
    id: 6,
    image: "src/assets/coffees/latte.svg",
    attributes: ["TRADICIONAL", "COM LEITE"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    valueBase: 9.9,
  },
  {
    id: 7,
    image: "src/assets/coffees/capuccino.svg",
    attributes: ["TRADICIONAL", "COM LEITE"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    valueBase: 9.9,
  },
  {
    id: 8,
    image: "src/assets/coffees/macchiato.svg",
    attributes: ["TRADICIONAL", "COM LEITE"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    valueBase: 9.9,
  },
  {
    id: 9,
    image: "src/assets/coffees/mocaccino.svg",
    attributes: ["TRADICIONAL", "COM LEITE"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    valueBase: 9.9,
  },
  {
    id: 10,
    image: "src/assets/coffees/chocolante-quente.svg",
    attributes: ["ESPECIAL", "COM LEITE"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    valueBase: 9.9,
  },
  {
    id: 11,
    image: "src/assets/coffees/cubano.svg",
    attributes: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    valueBase: 9.9,
  },
  {
    id: 12,
    image: "src/assets/coffees/havaiano.svg",
    attributes: ["ESPECIAL"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    valueBase: 9.9,
  },
  {
    id: 13,
    image: "src/assets/coffees/arabe.svg",
    attributes: ["ESPECIAL"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    valueBase: 9.9,
  },
  {
    id: 14,
    image: "src/assets/coffees/irlandes.svg",
    attributes: ["ESPECIAL", "ALCOÓLICO"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    valueBase: 9.9,
  },
];

export default coffees;
