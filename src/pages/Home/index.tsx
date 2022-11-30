import { HomeCard } from "./HomeCard";
import { OurCoffees } from "./OurCoffees";
import { HomeContainer } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <HomeCard></HomeCard>
            <OurCoffees></OurCoffees>
        </HomeContainer>
    );
}
