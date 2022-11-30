import { CreditCard } from "phosphor-react";
import { useState } from "react";
import { PaymentMethodType } from "../../contexts/OrderContext";
import { PaymentMethod, PaymentMethodContainer } from "./styles";

interface PaymentMethodSelectProps {
    selectPaymentMethod: (paymentMethod: PaymentMethodType) => void;
}

export function PaymentMethodSelect({
    selectPaymentMethod,
}: PaymentMethodSelectProps) {
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethodType>("credit");

    function handleSelectPaymentMethod(paymentMethod: PaymentMethodType) {
        setPaymentMethod(paymentMethod);
        selectPaymentMethod(paymentMethod);
    }

    return (
        <PaymentMethodContainer>
            <PaymentMethod
                selected={paymentMethod === "money"}
                onClick={() => handleSelectPaymentMethod("money")}
            >
                <CreditCard size={16} />
                <span> Dinheiro</span>
            </PaymentMethod>
            <PaymentMethod
                selected={paymentMethod === "credit"}
                onClick={() => handleSelectPaymentMethod("credit")}
            >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
            </PaymentMethod>
            <PaymentMethod
                selected={paymentMethod === "debit"}
                onClick={() => handleSelectPaymentMethod("debit")}
            >
                <CreditCard size={16} />
                <span>Cartão de débito</span>
            </PaymentMethod>
        </PaymentMethodContainer>
    );
}
