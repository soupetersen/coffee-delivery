import { createContext, ReactNode, useEffect, useReducer } from "react";
import { orderReducer } from "../reducers/coffee/reducer";

export type PaymentMethodType = "money" | "credit" | "debit";

export interface CoffeeType {
    id: number;
    tags: string[];
    name: string;
    description: string;
    amount: number;
    image: string;
    price: number;
}

type OrderData = {
    cep: string;
    street: string;
    streetNumber: string;
    complement?: string;
    district: string;
    city: string;
    estate: string;
    date: string;
    id: string;
    paymentMethod: PaymentMethodType;
};

interface OrderProps {
    totalPrice: number;
    cart: CoffeeType[];
    date: string;
    paymentMethod: PaymentMethodType;
    street: string;
    streetNumber: string;
    city: string;
    estate: string;
    id: string;
    district: string;
}

export interface OrdersContextProps {
    orders: OrderProps[];
    cart: CoffeeType[];
    productsPrice: number;
    deliveryPrice: number;
    totalPrice: number;
    addCoffeeToCart: (coffee: CoffeeType, amount: number) => void;
    removeCoffeeFromCart: (coffeeId: number) => void;
    completeCurrentOrder: (orderData: OrderData) => void;
}

export const OrdersContext = createContext({} as OrdersContextProps);

interface OrdersContextProviderProps {
    children: ReactNode;
}

export function OrderContextProvider({ children }: OrdersContextProviderProps) {
    const [ordersState, dispatch] = useReducer(
        orderReducer,
        {
            orders: [],
            currentOrder: {
                cart: [],
                totalPrice: 0,
                deliveryPrice: 0,
                productsPrice: 0,
            },
        },
        () => {
            const storedStateAsJSON = localStorage.getItem(
                "@coffee-delivery/orders"
            );

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return {
                orders: [],
                currentOrder: {
                    cart: [],
                    totalPrice: 0,
                    deliveryPrice: 0,
                    productsPrice: 0,
                },
            };
        }
    );

    useEffect(() => {
        const stateJSON = JSON.stringify(ordersState);

        localStorage.setItem("@coffee-delivery/orders", stateJSON);
    }, [ordersState]);

    const { orders, currentOrder } = ordersState;
    const { cart, totalPrice, deliveryPrice, productsPrice } = currentOrder;

    function addCoffeeToCart(coffee: CoffeeType, amount: number) {
        dispatch({
            type: "ADD_COFFEE_TO_CART",
            payload: {
                ...coffee,
                amount,
            },
        });
    }

    function removeCoffeeFromCart(coffeeId: number) {
        dispatch({
            type: "REMOVE_COFFEE_FROM_CART",
            payload: {
                id: coffeeId,
            },
        });
    }

    function completeCurrentOrder(orderData: OrderData) {
        dispatch({
            type: "COMPLETE_CURRENT_ORDER",
            payload: {
                cart,
                orderData,
            },
        });
    }

    return (
        <OrdersContext.Provider
            value={{
                orders,
                cart,
                totalPrice,
                deliveryPrice,
                productsPrice,
                addCoffeeToCart,
                removeCoffeeFromCart,
                completeCurrentOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
}
