import React from 'react'
import logo from '../../../images/lp_logo 1.png'
import basketImage from '../../../images/Fill.png'
import basketImageActive from '../../../images/FillActive.png'
import styles from './styles.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.imageLogo} src={logo} />
            <div className={styles.basketItems}>
                <img className={styles.imageBasket} src={basketImage} />
                <div className={styles.textSmall}>Корзина</div>
                <div className={styles.basketCounter}>1</div>
            </div>
        </div>
    )
}

export default Header
