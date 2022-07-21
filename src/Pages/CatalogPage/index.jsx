import React from 'react'
import Product from '../../Components/Product'
import product1 from '../../../images/image 11.png'
import styles from './styles.css'
const CatalogPage = () => {
    return (
        <div className={styles.catalogPage}>
            <h1 className={styles.title}>Каталог товаров</h1>
            <div className={styles.menuProducts}>
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
                <Product imageSrc={product1} title={'Увлажнитель воздуха STARWIND SHC1322, 3л,'} price={1650} color={'белый'} />
            </div>
        </div>
    )
}

export default CatalogPage
