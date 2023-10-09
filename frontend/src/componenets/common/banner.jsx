import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import './banner.css';


function TopBanner(props) {
    return (
        <div className="top-links p-4 row text-light border-bottom" style={{backgroundColor: props.bg}}>
          <div className="child1 col-8">
            <span> 
            <i className="fa-sharp fa-regular fa-envelope-open me-2">
            <FontAwesomeIcon icon={faEnvelopeOpen} style={{color: "#fafafa"}}/>
            </i>Email as at: <span className="email"> dagitensay@gmail.com</span>
            </span>
          </div>
          <div className="child2 col-4 ps-5 social">
            <span className='icons' >
              <FontAwesomeIcon icon={faFacebookF} style={{color: "#fafafa", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faDribbble} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", margin: '0 15px'}} />
              <FontAwesomeIcon icon={faBehance} style={{color: "#ffffff", margin: '0 15px'}} />
            </span>
            <span className="telephone border-start border-2 ps-3"><i class="fa-thin fa-phone"></i>+251965382262</span>
          </div>            
        </div>
    )
}

export default TopBanner;