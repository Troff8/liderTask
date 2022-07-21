import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/lp_logo 1.png'
import basketImage from '../../../images/Fill.png'
import styles from './styles.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'}>
                <img className={styles.imageLogo} src={logo} />
            </Link>
            <Link to={'/basket'}>
                <div className={styles.basketItems}>
                    <img className={styles.imageBasket} src={basketImage} />
                    <div className={styles.textSmall}>Корзина</div>
                    <div className={styles.basketCounter}>1</div>
                </div>
            </Link>
        </div>
    )
}

export default Header
