import React from 'react'
import { FaFacebook } from "react-icons/fa";
// import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="cont">

 <h2 class='head'>BB SPORTS SPACE</h2>
              <h1 class='maphead'>Google Map Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.8023066920205!2d77.7392802!3d28.963587600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65d68c3aa015%3A0x8ae8db9587cb4db9!2sBabita%20Bhardwaj%20sports!5e0!3m2!1sen!2sin!4v1739364491253!5m2!1sen!2sin" class='googlemap'  loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        <h2>Locations for Visit </h2>
     <ul> 
             <li><a href="/" target="_blank" class='locations'>MEERUT ,  UTTAR PRADESH</a></li>
            <li><a href="https://maps.app.goo.gl/BoGFN4ZyMZN8rHJ66" target="_blank" class='locations'> GUJRAT , BHAVNAGAR</a></li>
           
            <li><a href="/" target="_blank" class='locations'>NEW DELHI , CHIRAG DELHI</a></li>
            
        </ul>
        




         <a href='https://www.facebook.com/share/1AJjxYevrE/?mibextid=wwXIfr' target="_blank" class=" my-icons"><i><FaFacebook /> FACEBOOK</i></a>
                     {/* <i className=" my-icon"><ImTwitter /> TWITTER</i> */}
                    <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank" class=" my-icons"><i ><FaInstagram /> INSTAGRAM</i></a>
                    {/* <i className=" my-icon"><FaLinkedinIn /> LINKDIN</i> */}
                    <a href="https://youtube.com/@babitasports?si=BeoSVuQIT6tjKiiJ" target="_blank" class=" my-icons"><i><AiOutlineYoutube /> YOUTUBE</i></a>
  </div>
    </>
  )
}

export default Contact
