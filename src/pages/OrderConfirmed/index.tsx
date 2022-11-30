import {
    SuccessfulOrderContainer,
    InfoContainer,
    InfoTag,
    NoCompleteOrderMessage,
    ImageContainer,
    IconCircle,
} from "./styles";
import successfulOrderImage from "../../assets/order-confirmed.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useParams } from "react-router-dom";
import { useCoffee } from "../../hooks/useCoffee";

export function OrderConfirmed() {
    const { id } = useParams();
    const { orders } = useCoffee();
    const lastPosition = orders.length - 1;

    const order = orders.find((order) => order.id === id);

    return (
        <SuccessfulOrderContainer>
            {order ? (
                <>
                    <InfoContainer>
                        <h2>Uhu! Pedido confirmado</h2>
                        <p>
                            Agora é só aguardar que logo o café chegará até
                            você!
                        </p>
                        <div>
                            <InfoTag>
                                <IconCircle circleColor="purple">
                                    <MapPin size={20} />
                                </IconCircle>
                                <div>
                                    <p>
                                        Entrega em{" "}
                                        <span>{`${orders[lastPosition].street}, ${orders[lastPosition].streetNumber}`}</span>
                                    </p>
                                    <p>{`${orders[lastPosition].district} - ${orders[lastPosition].city}, ${orders[lastPosition].estate}`}</p>
                                </div>
                            </InfoTag>
                            <InfoTag>
                                <IconCircle circleColor="yellow">
                                    <Timer size={20} />
                                </IconCircle>
                                <div>
                                    <p>Previsão de entrega</p>
                                    <span>20 min - 30 min</span>
                                </div>
                            </InfoTag>
                            <InfoTag>
                                <IconCircle circleColor="yellowDark">
                                    <CurrencyDollar size={20} />
                                </IconCircle>
                                <div>
                                    <p>Pagamento na entrega</p>
                                    <span>{order.paymentMethod}</span>
                                </div>
                            </InfoTag>
                        </div>
                    </InfoContainer>
                    <ImageContainer>
                        <img
                            src={successfulOrderImage}
                            alt="Pedido bem sucedido!"
                        />
                    </ImageContainer>
                </>
            ) : (
                <NoCompleteOrderMessage>
                    <h2>Você ainda não completou nenhum pedido!</h2>
                </NoCompleteOrderMessage>
            )}
        </SuccessfulOrderContainer>
    );
}
