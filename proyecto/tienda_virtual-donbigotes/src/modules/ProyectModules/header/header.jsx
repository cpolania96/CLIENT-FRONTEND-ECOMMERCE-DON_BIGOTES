import React from "react";
import CartWidget from "../../CartWidget/CartWidget";
import Cart from "../../CartWidget/cart";
import Menu from "./menu";
import News from "./news";
import Profile from "./profile";
import Search from "./search";
import Social from "./social";
import Track from "./track";
const Header = () => {
    return (
        <header>
            <News />
            <div className="container-principal">
                <div className="principal">
                    <div className="container-first">
                        <Social />
                    </div>
                    <div className="container-second">
                        <div className="container-logo">
                            <div className="logo"></div>
                        </div>
                        <div className="container-search">
                            <Search />
                        </div>
                        <div className="container-tools">
                            <Profile />
                            <Track />
                            <div className="container-cart">
                                <Cart />
                            </div>
                        </div>
                    </div>
                    <div className="container-third">
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="container-menu">
                <Menu />
            </div>
            <CartWidget />
        </header>
    )
}

export default Header;