import React from 'react'
import IconDelivery from '../svg/IconDelivery'
import IconSecure from '../svg/IconSecure'
import IconWallet from '../svg/IconWallet'

function InfoLabel() {
    return (
        <div class="info-label">
            <div class="label l1">
                <span>
                    <IconDelivery />
                </span>
                <h6>¡Envios gratis a Bogotá y Soacha!</h6>
            </div>
            <div class="label l2">
                <span>
                    <IconSecure />
                </span>
                <h6>Compras seguras en línea</h6>
            </div>
            <div class="label last">
                <span>
                    <IconWallet />
                </span>
                <h6>Pagos contraentrega</h6>
            </div>
        </div>
    )
}

export default InfoLabel
