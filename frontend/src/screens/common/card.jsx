import React from 'react';
import './card.css';

export default function Card(props) {
    return (
        <div className='col-lg-4 col-md-6 mb-4 rounded'>
        <div className= "card shadow border-0">
            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={props.src} className="card-img-top img-fluid embed-responsive-item img-btn w-100 rounded"  id={props.imgeId} style={{height: '35vh'
            }}/>
            <a href="#!">
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">${props.SubCity}</h5>
            </a>
            <a href="" className="text-reset">
              <p>${props.id}</p>
            </a>
            <h6 className="mb-3" style={{color:'#4A60A1'}}>${props.Price} birr</h6>
            <div className="specification">
              <i className="fa-thin fa-bed-front"></i>
              <span className="bedroom"></span>
              <i className="fa-thin fa-bath"></i>
              <span className="bathrooms">4</span>
              <i className="fa-thin fa-maximize"></i>
              <span className="area-size">${props.Size} ft</span>
            </div>
          </div>
        </div>
        </div>
    )
}