import React from 'react'
import './ProductCard.css'

const ProductCard = ({productMain,productSideImg1,productSideImg2,productSideImg3,productSideImg4,productImg1,productImg2,productImg3,title,price,description}) => {

  return (
    <>
    <div className='productCard'>
    <div className='productImgLeft'>
        <img src={productSideImg1} alt=''/>
        <img src={productSideImg2} alt=''/>
        </div>

      <div className='productImg'>
        <img src={productMain} alt=''/>
        </div>

        <div className='productImgRight'>        
        <img src={productSideImg3} alt=''/>
        <img src={productSideImg4} alt=''/>
        </div>
        </div>

        <div className='productDetails'>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <select className='sizeSelect'>
        <option>Size</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>X-Large</option>
        <option>XX-Large</option>
        <option>Free Size</option>
        </select>
        <select className='quantitySelect'>
          <option>Quantity</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
        </select>
      </div>

      <div className='buttons'>
        <button className='addToCartBtn'>Add To Cart</button>
        <button className='buyNowBtn'>Buy Now</button>
        </div>

      <div className='productrelatedImg'>
        <img src={productImg1} alt=''/>
        <img src={productImg2} alt=''/>
        <img src={productImg3} alt=''/>
      </div>

    </>
  )
}

export default ProductCard
