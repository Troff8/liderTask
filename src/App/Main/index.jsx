import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CatalogPage from '../../Pages/CatalogPage'
import BasketPage from '../../Pages/BasketPage'
const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage />} />
            <Route path='/basket' element={<BasketPage />} />
        </Routes>
    )
}

export default Main
