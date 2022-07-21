import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Button = ({ textButton, handler, type }) => {
    const [activeButton, setActiveButton] = useState(false)
    const [buttonChangeTitle, setButtonChangeTitle] = useState(false)
    const handlerAction = () => {
        if (type === 'product') {
            setButtonChangeTitle(!buttonChangeTitle)
        }
        setActiveButton(!activeButton)
    }

    return (
        <div
            className={`${styles.buttonContainer} ${activeButton ? styles.buttonContainerGreen : styles.buttonContainerBlue}`}
            onClick={handlerAction}
        >
            <div className={styles.buttonText}>{buttonChangeTitle ? 'В корзине' : textButton}</div>
        </div>
    )
}

Button.propTypes = {
    textButton: PropTypes.string,
    handler: PropTypes.func,
    type: PropTypes.string
}

export default Button
