import WhatsappIco from "../svg/icon-whatsapp"

const BtnContact = () => {
    return (
        <div class="items contact">
            <div class="icon">
                <a href="#">
                    <WhatsappIco />
                </a>
            </div>
            <h6 class="mess">¡Clickeame!</h6>
            <div class="label">
                <h6 id="opcion6Message">¡Escríbenos!</h6>
                <h6 id="opcion6Contact">+57 322 8262128</h6>
            </div>
        </div>
    )
}
export default BtnContact;