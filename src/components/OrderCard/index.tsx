import { useState } from "react";
import { CoffeeType } from "../../contexts/OrderContext";
import { CoffeeInputAmount } from "../CoffeeInputAmount";
import { RemoveOrderButton } from "../RemoveOrderButton";
import {
    OrderActions,
    OrderCardContainer,
    OrderCardInfo,
    OrderCardPrice,
    OrderCardTitle,
} from "./styles";

interface OrderCardProps {
    order: CoffeeType;
}

export function OrderCard({ order }: OrderCardProps) {
    const { name, image, price, amount, id } = order;
    const [coffeeAmount, setCoffeeAmount] = useState(() =>
        amount ? amount : 0
    );

    function addOne() {
        if (coffeeAmount < 9) {
            setCoffeeAmount((state) => state + 1);
        }
    }

    function removeOne() {
        if (coffeeAmount > 0) {
            setCoffeeAmount((state) => state - 1);
        }
    }

    return (
        <OrderCardContainer>
            <img src={image} />
            <OrderCardInfo>
                <OrderCardTitle>{name}</OrderCardTitle>
                <OrderActions>
                    <CoffeeInputAmount
                        amount={coffeeAmount}
                        addOne={addOne}
                        removeOne={removeOne}
                    ></CoffeeInputAmount>
                    <RemoveOrderButton coffeeId={id} />
                </OrderActions>
            </OrderCardInfo>
            <OrderCardPrice>
                R$ {(price * coffeeAmount).toFixed(2)}
            </OrderCardPrice>
        </OrderCardContainer>
    );
}
