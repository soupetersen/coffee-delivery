import { Minus, Plus } from "phosphor-react";
import { CoffeeAmountContainer } from "./styles";

interface CoffeeAmountProps {
    amount: number;
    addOne: () => void;
    removeOne: () => void;
}

export function CoffeeInputAmount({
    amount,
    addOne,
    removeOne,
}: CoffeeAmountProps) {
    function handleAddOne() {
        addOne();
    }

    function handleRemoveOne() {
        removeOne();
    }

    return (
        <CoffeeAmountContainer>
            <button onClick={handleRemoveOne} title="Remover 1">
                <Minus size={16} />
            </button>
            <span>{amount}</span>
            <button onClick={handleAddOne} title="Adicionar 1">
                <Plus size={16} />
            </button>
        </CoffeeAmountContainer>
    );
}
