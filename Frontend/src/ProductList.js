import React from 'react'
// import Header from './Header'
// import Navbar from './Navbar'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <>

    {/* <Header/>
    <Navbar/>     */}
    <ProductCard productImg={"/image/gloves5.jpg"} title={"Samsung Galaxy S24 Ultra"} price={90000} description={"Samsung is introducing a new galaxy S24 Ultra with a premium texture that has no match and available in 4 variant colors."}/>
      <div>
      </div>

    </>
  )
}

export default ProductList
