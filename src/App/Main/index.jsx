import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CatalogPage from '../../Pages/CatalogPage'
const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage />} />
        </Routes>
    )
}

export default Main
