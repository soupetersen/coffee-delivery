import { useContext } from "react";
import { OrdersContext, OrdersContextProps } from "../contexts/OrderContext";

export function useCoffee(): OrdersContextProps {
    const context = useContext(OrdersContext);
    return context;
}
