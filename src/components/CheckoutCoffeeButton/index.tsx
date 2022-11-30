import { ShoppingCart } from "phosphor-react";
import { CheckoutCard } from "./style";

interface CheckoutCoffeeButtonProps {
    isCoffeeSelected: boolean;
    buttonAddToCartIsDisabled: boolean;
    addCoffeeToCart: () => void;
}

export function CheckoutCoffeeButton({
    buttonAddToCartIsDisabled,
    isCoffeeSelected,
    addCoffeeToCart,
}: CheckoutCoffeeButtonProps) {
    return (
        <CheckoutCard
            onClick={addCoffeeToCart}
            disabled={buttonAddToCartIsDisabled}
            title={
                buttonAddToCartIsDisabled
                    ? "Selecione uma quantidade para adicionar ao carrinho"
                    : "Adicionar ao carrinho"
            }
        >
            <ShoppingCart size={16} weight="fill" />
        </CheckoutCard>
    );
}
