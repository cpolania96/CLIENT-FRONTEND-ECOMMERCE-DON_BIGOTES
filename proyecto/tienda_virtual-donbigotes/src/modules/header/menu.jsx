import BtnAdopt from "./menu-btn_adopt";
import BtnBlog from "./menu-btn_blog";
import BtnContact from "./menu-btn_contact";
import BtnDogcast from "./menu-btn_dogcast";
import BtnMasc from "./menu-btn_masc";
import BtnOfert from "./menu-btn_ofert";

const Menu = () => {
    return (
        <menu>
            <BtnMasc />
            <BtnOfert />
            <BtnBlog />
            <BtnAdopt />
            <BtnDogcast />
            <BtnContact />
        </menu>
    )
}
export default Menu;