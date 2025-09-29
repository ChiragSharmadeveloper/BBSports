import React from 'react'
import {Link } from 'react-router-dom';
import "./index.css";

function Navbar(){
  
  return (
    <>
        < div className="header2">
<ul>
      <Link to='/'><li>
         Home</li></Link>
  
          <Link to='/about'> <li>About</li>
         </Link>
   
                  <Link to='/contact'> <li>Contact
                  </li></Link>
  
    
              <Link to='/Products'><li> Products
              </li> </Link>
    
</ul>
</div>
</>
  )
}

export default Navbar

    
    
 