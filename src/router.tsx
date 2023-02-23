import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}
