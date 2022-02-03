import ArrowIco from "../svg/icon-arrow";
import DogIco from "../svg/icon-dog";

const BtnMasc = () => {
    return (
        <div className="items list-menu">
            <div className="btn-menu">
                <div className="img">
                    {/* <DogIco /> */}
                </div>
                <h6 id="opcion1">Mascota</h6>
                <span className="icon">
                    <ArrowIco />
                </span>
            </div>
        </div>
    )
}
export default BtnMasc;