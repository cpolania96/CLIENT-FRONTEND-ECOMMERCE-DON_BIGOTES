import BtnAdopt from "./menu-btn_adopt";
import BtnBlog from "./menu-btn_blog";
import BtnMasc from "./menu-btn_masc";
import BtnOfert from "./menu-btn_ofert";

const Menu = () => {
    return (
        <menu>
            <BtnMasc />
            <BtnOfert />
            <BtnBlog />
            <BtnAdopt />
        </menu>
    )
}
export default Menu;