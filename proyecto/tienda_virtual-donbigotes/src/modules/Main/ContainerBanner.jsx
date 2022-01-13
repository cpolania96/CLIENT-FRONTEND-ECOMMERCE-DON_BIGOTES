import Ad from '../button/Ad'
import At from '../button/At'
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function ContainerBanner({ TITLE }) {
    const ID = "cards"
    return (
        <div class="banner">
            <div class="title">
                <h6>{TITLE}</h6>
                <div class="selector">
                    <At Id={ID} />
                    <Ad Id={ID} />
                </div>
            </div>
            <div class="container-cards">
                <div className={ID}>
                    <ItemListContainer />
                </div>
            </div>
        </div>
    )
}

export default ContainerBanner
