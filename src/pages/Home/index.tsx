import coffees from "../../db/coffees";
import ICoffee from "../../utils/interfaces/ICoffee";
import { Coffees } from "./components/Coffees";
import { Description } from "./components/Description";
import { CoffeesContainer, HomeContainer, TitleCoffee } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Description />
      <TitleCoffee>Nossos cafés</TitleCoffee>
      <CoffeesContainer>
        {coffees.map((coffee: ICoffee) => {
          return <Coffees key={coffee.id} coffee={coffee} />;
        })}
      </CoffeesContainer>
    </HomeContainer>
  );
}
