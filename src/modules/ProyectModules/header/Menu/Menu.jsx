import BtnMasc from "../menu-btn_masc";
import { useState } from "react";
import Menu_Container from "./Menu_Container/Menu_Container";

const Menu = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const showMenu = () => {
        if (menuIsVisible) {
            return <Menu_Container setMenuIsVisible={setMenuIsVisible} />
        }
        // return <Menu_Container setMenuIsVisible={setMenuIsVisible} />
    }
    return (
        <menu>
            <BtnMasc setMenuIsVisible={setMenuIsVisible} />
            {showMenu()}
        </menu>
    )
}
export default Menu;