import React from 'react'
// import Header from '../../Header'
// import Navbar from '../../Navbar'
// import ProductList from '../../ProductList'
import image1 from '././image/tennis b.jpg'
import ProductCard from '../../ProductCard'

const TennisBats = () => {
  return (
    <>
      <div>
        <h1>this is my first Bat page.</h1>
        <ProductCard productImg={image1} title={"Tennis Bat"} price={1500} description={"This is a high-quality tennis bat made from durable materials, designed for optimal performance on the court."}/>
        </div>
    </>
  )
}

export default TennisBats
