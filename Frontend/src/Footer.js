 import React from 'react'
import { FaFacebook } from "react-icons/fa";
// import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className="foot">
      <div className="fot">
        <ul>
            <h2>Get info</h2>
            <li><a href="mailto:babitasports5@gmail.com">Contact Us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Enquiry</a></li>
        </ul>
        <ul>
              <h2>BB SPORTS SPACE</h2>
            <li><a href="https://g.co/kgs/ihp9MQV" target="_blank">UTTAR PARDESH , MEERUT</a></li>
            <li><a href="https://g.co/kgs/ihp9MQV" target="_blank">GUJRAT , BHAVNAGAR</a></li>
            <li><a href="https://g.co/kgs/ihp9MQV" target="_blank">NEW DELHI , CHIRAG DELHI</a></li>
            <li><a href="https://g.co/kgs/ihp9MQV" target="_blank">COMING SOON....</a></li>
        </ul>
        <ul>
        <h2>Legal & Privacy</h2>
        <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Website Disclaimer</a></li>
            <li><a href="#">Terms and Conditions</a></li>
        </ul>
        <ul>
        <h2>For Enquiry</h2>
            <li><a href="http://wa.me/919997270808" target='_blank'>+91 9997270808 </a></li>
            <li><a href="http://wa.me/918401003634" target='_blank'>+91 8401003634 </a></li>
            <li><a href="mailto:babitasports5@gmail.com">babitasports5@gmail.com</a></li>
        </ul>
        <ul>
            <h1>Subscribe</h1>
            
            <form action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="7a907100-0d09-41a8-adc5-f7b1de221320"></input>

    <input type="text" name="name" id="i2" required placeholder="Enter Your Name : "></input> <br></br>
    <input type="email" name="email" id="i2" required placeholder="Enter Your E-mail : "></input><br></br>
    <textarea type="message" required id='feedback' placeholder="Enter Your Comment : " spellCheck="true"></textarea><br></br>

     <input type="hidden" name="redirect"  value="https://mywebsite.com/thanks.html"></input>
     
    <button type="submit" id="i3">Submit</button>
</form>
</ul>
            <ul>
            <div >
            <a href='https://www.facebook.com/share/1AJjxYevrE/?mibextid=wwXIfr' target="_blank" className="my-icon"><i><FaFacebook /> FACEBOOK</i></a>
             {/* <i className=" my-icon"><ImTwitter /> TWITTER</i> */}
            <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank" className="my-icon"><i ><FaInstagram /> INSTAGRAM</i></a>
            {/* <i className=" my-icon"><FaLinkedinIn /> LINKDIN</i> */}
            <a href="https://youtube.com/@babitasports?si=BeoSVuQIT6tjKiiJ" target="_blank" className="my-icon"><i><AiOutlineYoutube /> YOUTUBE</i></a>
        </div>
        </ul>
        </div>
      
      <div className='lastfoot'>
        <h1 id='lastfoot1'> BABITA BHARDWAJ SPORTS</h1>
        <span class="fa-solid fa-registered" > 2019 | Design  Partners  :  Abhay  &  Team</span>
        <span class="fa-solid fa-copyright" id='copy' > copyright   BABITA   BHARDWAJ   SPORTS</span>
      </div>
      </footer>
    </>
  )
}
export default Footer