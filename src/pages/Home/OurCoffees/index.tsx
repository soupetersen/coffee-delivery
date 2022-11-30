import { CoffeeCard } from "../../../components/CoffeeCard";
import { coffees } from "../../../data/coffees";
import {
    CoffeesContainer,
    OurCoffeesContainer,
    OurCoffeesTitle,
} from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer>
            <OurCoffeesTitle>Nossos cafés</OurCoffeesTitle>
            <CoffeesContainer>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeesContainer>
        </OurCoffeesContainer>
    );
}
