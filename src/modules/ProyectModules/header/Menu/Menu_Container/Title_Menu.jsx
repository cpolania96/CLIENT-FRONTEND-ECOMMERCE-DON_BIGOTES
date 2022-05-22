import React from 'react'
import Icon_Cat from '../../../../../assets/svg/Icon_Cat'
import Icon_Dog from '../../../../../assets/svg/Icon_Dog'

function Title_Menu({ setCat, setDog, onDog, onCat }) {
    return (
        <ul>
            <li onMouseEnter={() => { setDog(true) }}
                onMouseLeave={() => { setDog(false) }}
                className={onDog && `onColor`}>
                <span><Icon_Dog /></span>
                <h3>Perros</h3>
            </li>
            <li onMouseEnter={() => { setCat(true) }}
                onMouseLeave={() => { setCat(false) }}
                className={onCat && `onColor`}>
                <span><Icon_Cat /></span>
                <h3>Gatos</h3>
            </li>
        </ul>
    )
}

export default Title_Menu