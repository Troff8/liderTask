import React from 'react'
import BasketItem from '../../Components/BasketItem'
import product1 from '../../../images/image 11.png'
import styles from './styles.css'
const BasketPage = () => {
    return (
        <div className={styles.basketPage}>
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.listProductsBasket}>
                <BasketItem
                    imageSrc={product1}
                    title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'}
                    price={1650}
                    color={'белый'}
                />
            </div>
        </div>
    )
}

export default BasketPage
