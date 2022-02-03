import { useState } from "react";
import ArrowIco from "../../assets/svg/icon-arrow";
import CartIco from "../../assets/svg/icon-cart";
import ContainerCart from "./ContainerCart";

const Cart = () => {
    const [cartVisible, setCartVisible] = useState(false)

    return (
        <>
            <div className="cart"
                onMouseEnter={() => { setCartVisible(true) }}
                onMouseLeave={() => { setCartVisible(false) }}
            >
                <div className="icon">
                    <CartIco />
                    <span>1</span>
                </div>
                <h6>$0</h6>
                <div className="icon-2">
                    <ArrowIco />
                </div>
                {cartVisible && <ContainerCart />}
                {/* <ContainerCart /> */}
            </div>

        </>
    )
}
export default Cart;