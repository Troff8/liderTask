import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Counter from '../Counter'
import styles from './styles.css'
const BasketItem = ({ imageSrc, title, price, color, count }) => {
    return (
        <div className={styles.basketItem}>
            <img className={styles.basketProductImage} src={imageSrc} />
            <p className={styles.textDiscription}>
                {title} <span>{color}</span>
            </p>
            <Counter count={1} />
            <p className={styles.price}>{price}₽</p>
            <div className={styles.blockButton}>
                <Button textButton={'X'} handler={null} type={''} />
            </div>
        </div>
    )
}
BasketItem.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    color: PropTypes.string,
    count: PropTypes.number
}

export default BasketItem
