import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Cart from "./cart";
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
            <div class="container-principal">
                <div class="principal">
                    <div class="container-first">
                        <Social />
                    </div>
                <div class="container-second">
                    <div class="container-logo">
                        <div class="logo"></div>
                    </div>
                    <div class="container-search">
                        <Search />
                    </div>
                    <div class="container-tools">
                        <Profile />
                        <Track />
                        <div class="container-cart">
                           <Cart />
                        </div>
                    </div>
                </div>
                <div class="container-third">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="container-menu">
            <Menu />
        </div>
        <CartWidget />
    </header>
    )
}

export default Header;