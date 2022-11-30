import { CoffeeType } from "../contexts/OrderContext";

export function formatOrder(cart: CoffeeType[], amount: number = 1) {
    const productsPrice = cart.reduce(
        (previousValue: number, coffee: CoffeeType) => {
            return previousValue + coffee.price * amount;
        },
        0
    );

    const deliveryPrice = productsPrice > 70 ? 0 : 8;
    const totalPrice = productsPrice + deliveryPrice;

    return { deliveryPrice, productsPrice, totalPrice, cart };
}
