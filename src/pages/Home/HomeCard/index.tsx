import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
    Advantages,
    CardContainer,
    CardContent,
    CardTitle,
    SubTitle,
} from "./styles";

import CoffeeImage from "../../../assets/coffee-card.png";

export function HomeCard() {
    return (
        <CardContainer>
            <CardContent>
                <CardTitle>
                    Encontre o café perfeito para qualquer hora do dia
                </CardTitle>
                <SubTitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </SubTitle>
                <Advantages>
                    <div>
                        <ShoppingCart />
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <Package />
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div>
                        <Timer />
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <Coffee />
                        <span>O café chega fresquinho até você</span>
                    </div>
                </Advantages>
            </CardContent>
            <img src={CoffeeImage} />
        </CardContainer>
    );
}
