import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';


function TopBanner() {
    return (
        <div class="top-links p-4 row text-light border-bottom">
          <div class="col-8">
            <span> 
            <i class="fa-sharp fa-regular fa-envelope-open me-2">
            </i>Email as at: <span class="email"> dagitensay@gmail.com</span>
            </span>
          </div>
          <div class="col-4 ps-5">
            <span>
              <FontAwesomeIcon icon={faFacebookF} style={{color: "#fafafa", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faDribbble} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faBehance} style={{color: "#ffffff", margin: '0 15px'}} />
            </span>
            <span class="telephone border-start border-2 ps-3"><i class="fa-thin fa-phone"></i>+251965382262</span>
          </div>            
        </div>
    )
}

export default TopBanner;