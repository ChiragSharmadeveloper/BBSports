import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import './Product.css'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const ProductPage = () => {
  
  return (
    <div className='main'>
      <h1 class='productHead'>All Our Products</h1>
 <button class='lbtn1' ><SlArrowLeft /> Previous</button>
      <button class='rbtn1'><SlArrowRight /> Next</button>
       <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
       navigation={
        {
        nextEl: '.rbtn1',
        prevEl: '.lbtn1'
      }}
      freeMode={true}
        pagination={
          { clickable: true }
        }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <div class='main'>
      <SwiperSlide>
                                 {/* BAT SECTION   */}
        <div class='classswiper'>
        
        <img src="\image\bat.jpg.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'>M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
         <div class='classswiper'>
        
        <img src="\image\C bat2.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Catching Poplar Willow Practice Bat with Foam Base for Catching and Fielding Practice </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2890/-   </span>₹1500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
        <div class='classswiper'>
        
        <img src="\image\bat3.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Condor Surge Grade 1 English Willow Cricket Bat ( Size: Short Handle, Ball_ type : Leather  | Unisex Gloves , Playing Style : All-Round ) | Free Cover | Ready to Play  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹25500/-   </span>₹20500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\tennis b.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Concepts Kashmir Willow Cricket Bat | Double Blade for Hard & Soft Tennis  | Unisex Gloves  | Full Cane Handle | Lightweight & Durable | Ideal for Club & Tournament Play </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹2000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
         <div class='classswiper'>
        
        <img src="\image\bat4.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens, adults and kids ( Size - 3,4,5) | Material: English Willow | Lightweight | Free Cover | Ready to Play | for Players | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹9999/-   </span>₹7500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bat5.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens, adults and kids ( Size -3,4,5) | Material: English Willow | Lightweight | Free Cover | Ready to Play | for Player | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹7599/-   </span>₹6000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bat6.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens, Adults and Kids ( Size -3,4,5) | Material: English Willow | Lightweight | Free Cover | Ready to Play | for  Player | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹6500/-   </span>₹4000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bat7.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens, Adults and Kids ( Size -3,4,5) | Material: Engliah Willow | Lightweight | Free Cover | Ready to Play | for  Player | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹9500/-   </span>₹7000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bat8.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition Cricket Bat for Mens, Adults and Boys ( Size - 4,5) | Material: English Willow | Lightweight | Free Cover | Ready to Play | for  Player | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bat9.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports 1 Grade Bat for Mens and Adults (Size - 5) | Material: Premium English Willow | Lightweight | Free Cover | Ready to Play | for Professional Players | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹15500/-   </span>₹12500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
       
      </SwiperSlide>
      <SwiperSlide>
                               {/*   BAG SECTION  */}
        <div class='classswiper'>
        
        <img src="\image\bag1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Test Pro Edition Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Mobile Charging Port , Multiple Compartments & Spacious Storage </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹6000/-   </span>₹4500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\k bag 1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Cricket Kit Bag for Kids with Extra Quality Heavy Padded , Two type of colour options (Grey , Blue)</h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2000/-   </span>₹1300/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\bag2.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Cricket Kit Bag for Adults and Kids with Extra Quality Heavy Padded , colour options </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2200/-   </span>₹1500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag3.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2>  BB Sports Edition Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage</h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹2300/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag4.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Black Edition for Dedicated Shoe Cave Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹4500/-   </span>₹3000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag5.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Black & white Edition for Dedicated Shoe Cave Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage for Adult and Kids </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2500/-   </span>₹1700/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag7.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Blue & Silver Edition for Dedicated Shoe Cave Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage for Mens , Adult and Kids </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹4500/-   </span>₹2000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag8.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Champions Edition for Dedicated Shoe Cave Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage for Mens only. </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5200/-   </span>₹3800/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag9.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Duffle Edition Kit Bag for Kids with Extra Quality Heavy Padded , colour options </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2700/-   </span>₹1500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\bag10.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Warriors Edition for Dedicated Shoe Cave Wheelie Cricket Kitbag – Premium, High-Performance Cricket Bag with Smooth Wheels, Multiple Compartments & Spacious Storage for Mens only. </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹2700/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>

        </SwiperSlide>
      <SwiperSlide>
                                      {/*  GLOVES SECTION   */}
         <div class='classswiper'>
        
        <img src="\image\limited gloves.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3300/-   </span>₹2500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Test Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3000/-   </span>₹2200/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\gloves2.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports IPL Edition ( Two Finger Cut ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3000/-   </span>₹2000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves4.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports PLayer Limited Edition ( Full Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2700/-   </span>₹2000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves5.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Girls Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹2500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves6.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Day & Night Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2700/-   </span>₹2000/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves7.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Pure White ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2500/-   </span>₹1800/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves8.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Multi-Colour Edition ( VK edition ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹2500/-   </span>₹1750/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves9.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Virat Kholi Edition ( Dedicated Edition ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹1999/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves 10.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Test-Pro Edition ( Half Cut ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹3500/-   </span>₹2200/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
                                                {/*  LEG GUARD SECTION   */}
         <div class='classswiper'>
        
        <img src="\image\PP2.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2>BB Sports Player Edition Leather Cricket Batting Legguard | Lightweight Protective Pads | Club-Grade Batting Pads| Premium White colour – ( sizes: Kids , Adults , Mens)</h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5000/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'>M.R.P  <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
                                     {/* MULTI ITEMS LIKE THIGH GUARD , ELBOW GUARD , ETC */}
         <div class='classswiper'>
        
        <img src="\image\PP2.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2>BB Sports Player Edition Leather Cricket Batting Legguard | Lightweight Protective Pads | Club-Grade Batting Pads| Premium White colour – ( sizes: Kids , Adults , Mens)</h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5000/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'>M.R.P  <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
                                 {/*  ADDITIONAL ITEMS   */}
         <div class='classswiper'>
        
        <img src="\image\PP2.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2>BB Sports Player Edition Leather Cricket Batting Legguard | Lightweight Protective Pads | Club-Grade Batting Pads| Premium White colour – ( sizes: Kids , Adults , Mens)</h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5000/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'>M.R.P  <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\gloves1.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Limited Edition ( Cut Finger ) Cricket Gloves for Professional Players with comfortable English Pitat Leather | Lightweight | Free Cover | Ready to Play | Soft Leather | Ideal for Leather  | Unisex Gloves  </h2>
        <p class='Rate'> M.R.P <span class='price'>  ₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      </div>
    </Swiper>

     
     



    </div>
  );
};

export default ProductPage;
