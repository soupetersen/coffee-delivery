/* eslint-disable no-case-declarations */
import { CoffeeType } from "../../contexts/OrderContext";
import { formatOrder } from "../../utils/FormatOrder";

export function orderReducer(state: any, action: any) {
    switch (action.type) {
        case "ADD_COFFEE_TO_CART": {
            const { amount } = action.payload;
            const { orders, currentOrder } = state;
            const { cart } = currentOrder;
            cart.amount = amount;

            const newCart = cart.filter((coffee: CoffeeType) => {
                return coffee.id !== action.payload.id;
            });

            newCart.push(action.payload);

            const newCurrentOrder = formatOrder(newCart, amount);
            console.log("newCurrentOrder", newCurrentOrder);
            return { orders, currentOrder: newCurrentOrder };
        }

        case "REMOVE_COFFEE_FROM_CART": {
            const { orders, currentOrder } = state;
            const { cart } = currentOrder;

            const newCart = cart.filter((coffee: CoffeeType) => {
                return coffee.id !== action.payload.id;
            });

            const newCurrentOrder = formatOrder(newCart);
            return { orders, currentOrder: newCurrentOrder };
        }

        case "COMPLETE_CURRENT_ORDER":
            const { orders, currentOrder } = state;
            const { cart, totalPrice } = currentOrder;

            const newCompleteOrder = {
                cart,
                totalPrice,
                ...action.payload.orderData,
            };

            window.location.href = `/orderConfirmed/${action.payload.orderData.id}`;

            return {
                orders: [...orders, newCompleteOrder],
                currentOrder: {
                    cart: [],
                    totalPrice: 0,
                    deliveryPrice: 0,
                    productsPrice: 0,
                },
            };

        default:
            return state;
    }
}
