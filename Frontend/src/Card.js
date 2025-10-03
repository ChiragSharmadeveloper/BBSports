import React from 'react'
import "./App.css"

const Card = ({title1,image}) => {
  return (
    <>
      <div className="main">
        <img src={image}
         id="footo" alt=''/>
        <h2>{title1}</h2>
      </div>

    </>
  )
}

export default Card;
