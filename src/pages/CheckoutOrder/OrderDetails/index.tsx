import { SendOrderButton } from "../../../components/OrderButton";
import { useCoffee } from "../../../hooks/useCoffee";
import { DetailsContainer, OrderDetailsContainer } from "./styles";

export function OrderDetails() {
    const { cart, deliveryPrice, totalPrice, productsPrice } = useCoffee();

    return (
        <OrderDetailsContainer>
            <DetailsContainer>
                <p>Total de itens</p>
                <p>R$ {productsPrice.toFixed(2)}</p>
            </DetailsContainer>
            <DetailsContainer>
                <p>Entrega</p>
                <p>R$ {deliveryPrice.toFixed(2)}</p>
            </DetailsContainer>
            <DetailsContainer>
                <h1>Total</h1>
                <h1>R$ {totalPrice.toFixed(2)}</h1>
            </DetailsContainer>
            <SendOrderButton />
        </OrderDetailsContainer>
    );
}
