import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { OrderCard } from "../../components/OrderCard";
import { PaymentMethodSelect } from "../../components/PaymentMethodSelect";
import { PaymentMethodType } from "../../contexts/OrderContext";
import { AddressForm } from "./AddressForm";
import { OrderDetails } from "./OrderDetails";
import {
    AddressContainer,
    OrderHeader,
    CheckoutOrderContainer,
    LeftOrderContainer,
    CoffeesOrder,
    OrdersContainer,
    PaymentContainer,
    Subtitle,
} from "./styles";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { useCoffee } from "../../hooks/useCoffee";

const formValidationSchema = zod.object({
    cep: zod.string().min(1, "cep").max(8),
    street: zod.string().min(1, "Nome da rua").max(50),
    streetNumber: zod.string().min(1, "Número da rua").max(5),
    city: zod.string().min(1, "Cidade").max(30),
    complement: zod.optional(zod.string().min(0, "Complemento").max(100)),
    district: zod.string().min(0, "Bairro").max(30),
    estate: zod.string().min(0, "Estado").max(3),
});

type formData = zod.infer<typeof formValidationSchema>;

export function CheckoutOrder() {
    const { cart, completeCurrentOrder } = useCoffee();
    const addressForm = useForm<formData>({
        resolver: zodResolver(formValidationSchema),
        defaultValues: {
            cep: "12345678",
            street: "Alameda marine",
            streetNumber: "9999",
            city: "Salvador",
            complement: "aptos",
            district: "Stiep",
            estate: "BA",
        },
    });
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethodType>("credit");

    function selectPaymentMethod(paymentMethod: PaymentMethodType) {
        setPaymentMethod(paymentMethod);
    }

    const { handleSubmit, watch, reset } = addressForm;

    function handleCreateNewOrder(data: formData) {
        console.log("handleCreateNewOrder", handleCreateNewOrder);

        const orderData = {
            ...data,
            id: uuidv4(),
            date: new Date().toISOString(),
            paymentMethod,
        };

        completeCurrentOrder(orderData);
        reset();
    }

    return (
        <CheckoutOrderContainer>
            <form
                id="address-form"
                onSubmit={handleSubmit(handleCreateNewOrder)}
            >
                <LeftOrderContainer>
                    <Subtitle>Complete seu pédido</Subtitle>
                    <AddressContainer>
                        <OrderHeader>
                            <MapPinLine size={20} />
                            <div>
                                <h2>Endereço de entrega</h2>
                                <p>
                                    Informe o endereço onde deseja receber seu
                                    pedido
                                </p>
                            </div>
                        </OrderHeader>
                        <FormProvider {...addressForm}>
                            <AddressForm />
                        </FormProvider>
                    </AddressContainer>
                    <PaymentContainer>
                        <OrderHeader>
                            <CurrencyDollar size={20} />
                            <div>
                                <h2>Pagamento</h2>
                                <p>
                                    O pagamento é feito na entrega. Escolha a
                                    forma que deseja pagar
                                </p>
                            </div>
                        </OrderHeader>
                        <PaymentMethodSelect
                            selectPaymentMethod={selectPaymentMethod}
                        />
                    </PaymentContainer>
                </LeftOrderContainer>
                <OrdersContainer>
                    <Subtitle>Cafés selecionados</Subtitle>
                    <CoffeesOrder>
                        {cart.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </CoffeesOrder>
                    <OrderDetails />
                </OrdersContainer>
            </form>
        </CheckoutOrderContainer>
    );
}
