import { Trash } from "phosphor-react";
import { useCoffee } from "../../hooks/useCoffee";
import { RemoveOrderButtonContainer } from "./styles";

export function RemoveOrderButton({ coffeeId }: { coffeeId: number }) {
    const { removeCoffeeFromCart } = useCoffee();

    return (
        <RemoveOrderButtonContainer
            onClick={() => removeCoffeeFromCart(coffeeId)}
        >
            <Trash />
            <span>Remover</span>
        </RemoveOrderButtonContainer>
    );
}
