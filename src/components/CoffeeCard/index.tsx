import { useState } from "react";
import { CoffeeType } from "../../contexts/OrderContext";
import { useCoffee } from "../../hooks/useCoffee";
import { CheckoutCoffeeButton } from "../CheckoutCoffeeButton";
import { CoffeeInputAmount } from "../CoffeeInputAmount";
import {
    CheckoutContainer,
    CoffeeCardContainer,
    PriceContainer,
    Tag,
    TagsContainer,
} from "./style";

interface CoffeeCardProps {
    coffee: CoffeeType;
}

export function CoffeeCard(props: CoffeeCardProps) {
    const { id, tags, name, description, image, price } = props.coffee;
    const { addCoffeeToCart, cart } = useCoffee();

    const [coffeeAmount, setCoffeeAmount] = useState(0);

    const isCoffeeSelected = coffeeAmount > 0;
    const buttonAddToCartIsDisabled = !isCoffeeSelected;

    function handleAddToCart() {
        addCoffeeToCart(props.coffee, coffeeAmount);
    }

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
        <CoffeeCardContainer>
            <img src={image} alt={name} />
            <TagsContainer>
                {tags.map((tag) => (
                    <Tag key={tag}>
                        <span>{tag}</span>
                    </Tag>
                ))}
            </TagsContainer>
            <h2>{name}</h2>
            <p>{description}</p>
            <CheckoutContainer>
                <PriceContainer>
                    <p>R$</p>
                    <span>{price.toFixed(2)}</span>
                </PriceContainer>
                <CoffeeInputAmount
                    amount={coffeeAmount}
                    addOne={addOne}
                    removeOne={removeOne}
                ></CoffeeInputAmount>
                <CheckoutCoffeeButton
                    buttonAddToCartIsDisabled={buttonAddToCartIsDisabled}
                    isCoffeeSelected={isCoffeeSelected}
                    addCoffeeToCart={handleAddToCart}
                ></CheckoutCoffeeButton>
            </CheckoutContainer>
        </CoffeeCardContainer>
    );
}
