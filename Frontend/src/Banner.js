import react from 'react'
import Card from './Card'
import VideoPlayer from './Video';
import { Link } from 'react-router-dom';

import transperentlogo from './Components/transperent logo.png'
import './App.css'

const Banner = ({title }) => {
  return (
      <> 
    {/* {/* 'banner div '>} */}

    {/* { Top banner} */}
      <div className='banner'>
      <div className='welcome'>
        <h1>{title}</h1>
        <h4>Welcome to BB Sports, your one-stop shop for all things cricket. As passionate cricket enthusiasts, we understand the importance of quality equipment in enhancing performance on the field. Whether you're a beginner or a seasoned pro, we offer a wide range of cricket products designed to suit players of all levels.
        At BB Sports, we specialize in providing top-of-the-line cricket gear, including bats, balls, pads, gloves, clothing, and accessories. Our carefully curated collection features the best brands in the industry, ensuring durability, performance, and comfort. We also offer personalized advice to help you choose the right equipment based on your playing style and preferences.
        Customer satisfaction is at the heart of everything we do. We aim to offer an exceptional shopping experience, whether you're purchasing for yourself, your team, or a cricket academy. With fast shipping, competitive prices, and excellent customer support, BB Sports is committed to providing cricket lovers with the best products and service.
          Join the BB Sports family today, and take your cricket game to the next level with the finest equipment available. Your cricket journey starts here!</h4>       
      </div>
        <img src={transperentlogo} id="foto2"/>
      </div>


      {/* { Card section } */}
      
      <div className='cardholder'>
     <Link to='/Products'><Card image={"/image/bag 2.jpg"} title1={"BAGS"} id="card1"></Card></Link>
    <Card image={"/image/tennis b.jpg"} title1={"TENNIS BATS"} id="card1"/>
    <Card image={"/image/PP2.jpg"} title1={"BATTING PADS"} id="card1"/>
    <Card image={"/image/limited gloves.jpg"} title1={"GLOVES"} id="card1"/>
    <Card image={"/image/KASHMIRI BAT.jpg"} title1={"KASHMIRI WILLOW"} id="card1"/>
    <Card image={"/image/english bat.jpg"} title1={"ENGLISH WILLOW"} id="card1"/>
    <Card image={"/image/full kit.jpg"} title1={"FULL KIT"} id="card1"/>
    <Card image={"/image/ball.jpg"} title1={"BALLS"} id="card1"/>
    </div>

  

    {/* { Changing image section } */}
      <h1 id='believe'> ————  BELIEVE IN YOUR SELF  ————</h1>
    <div className="image-main">
    <div className="image-container"></div>
    <div className="image-container"></div>
    <div className="image-container"></div>
    </div>

<VideoPlayer/>
    </>
    );
};

export default Banner;
