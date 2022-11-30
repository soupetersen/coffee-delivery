import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CheckoutOrder } from "./pages/CheckoutOrder";

import { Home } from "./pages/Home";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkoutOrder" element={<CheckoutOrder />} />
                <Route
                    path="/orderConfirmed/:id"
                    element={<OrderConfirmed />}
                />
            </Route>
        </Routes>
    );
}
