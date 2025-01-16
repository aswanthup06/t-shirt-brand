import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import ProductList from './Comp/ProductList'
import Adbanner from './Comp/Adbanner'

export default function Home() {
  return (
  <>
  <Navbar />
  <Adbanner />
  <ProductList />
  <Footer />
  </>
  )
}
