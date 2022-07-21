import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './styles.css'
const Product = ({ imageSrc, title, price, color }) => {
    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={imageSrc} />
            <p className={styles.textDiscription}>{title}</p>
            <p>{color}</p>
            <p className={styles.price}>{price}₽</p>
            <div className={styles.blockButton}>
                <Button textButton={'Добавить в корзину'} handler={null} type={'product'} />
            </div>
        </div>
    )
}
Product.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    color: PropTypes.string
}

export default Product
