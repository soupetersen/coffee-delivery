import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { OrdersContext } from "../../contexts/OrderContext";
import { SendOrderButtonContainer } from "./styles";

export function SendOrderButton() {
    return (
        <SendOrderButtonContainer type="submit" form="address-form">
            Confirmar pedido
        </SendOrderButtonContainer>
    );
}
