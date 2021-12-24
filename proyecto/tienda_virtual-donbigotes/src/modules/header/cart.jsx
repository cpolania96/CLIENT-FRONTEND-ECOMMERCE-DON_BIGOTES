import ArrowIco from "../svg/icon-arrow";
import CartIco from "../svg/icon-cart";

const Cart = () => {
    return (
        <div class="cart">
            <div class="icon">
                <CartIco />
                <span>1</span>
            </div>
            <h6>$0</h6>
            <div class="icon-2">
                <ArrowIco />
            </div>
        </div>
    )
}
export default Cart;