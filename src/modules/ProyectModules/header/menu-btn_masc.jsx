import ArrowIco from "../../../assets/svg/icon-arrow";
import Icon_Dog from "../../../assets/svg/Icon_Dog";

const BtnMasc = ({ setMenuIsVisible }) => {

    return (
        <div className="items"
            onMouseEnter={() => { setMenuIsVisible(true) }}
            onMouseLeave={() => { setMenuIsVisible(false) }}>
            <div className="btn">
                <Icon_Dog />
                <h6 id="opcion1">
                    Tienda
                </h6>
                <ArrowIco />
            </div>

        </div>
    )
}
export default BtnMasc;