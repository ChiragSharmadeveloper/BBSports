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
        <select>
        <option className='options'>Size</option>
        <option className='options'>Small</option>
        <option className='options'>Medium</option>
        <option className='options'>Large</option>
        <option className='options'>X-Large</option>
        <option className='options'>XX-Large</option>
        <option className='options'>Free Size</option>
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
