import { Cart, CartContainer, HeaderContainer, Localization } from "./styles";
import LogoCoffee from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { OrdersContext } from "../../contexts/OrderContext";
import { NavLink } from "react-router-dom";
import { useCoffee } from "../../hooks/useCoffee";

export function Header() {
    const { cart } = useCoffee();

    const emptyCart = cart.length === 0;

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={LogoCoffee} alt="" />
            </NavLink>
            <CartContainer>
                <Localization>
                    <MapPin size={20} weight="fill" />
                    Salvador, BA
                </Localization>
                <NavLink to="/checkoutOrder" title="Order">
                    <Cart>
                        <ShoppingCart size={20} weight="fill" />
                        {!emptyCart && <span>{cart.length}</span>}
                    </Cart>
                </NavLink>
            </CartContainer>
        </HeaderContainer>
    );
}
