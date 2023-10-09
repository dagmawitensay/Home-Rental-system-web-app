import React, { useEffect, useState } from 'react';
import homeService from '../../../services/home.service';
import './body.css';
import LikeButtonCompoent from '../../../componenets/common/like';

export default function Body(props) {
    const [content, setContent] = useState({});
    useEffect(() => {
        homeService.getHouseDetail(props.homeId).then((response) => {
            console.log(response);
            setContent(response)
        })

    }, []);
    if(!content.id) {
        return (<div className='text-center m-5'>
            Loading...
        </div>)
    }
    return (
      <div className="w-75 m-auto py-5">
        <div id="images" className="row">
          <div className="col-md-6 pe-0" >
            <img
              src={content.Home_Photo.Door}
              className="img-fluid rounded-start-4"
              style={{height: '410px'}}
            />
          </div>
          <div className="col-md-6 row">
            <div className="col-md-6 pe-0">
              <img
                src={content.Home_Photo.Floor}
                className="img-fluid pb-2"
                style={{ height: "210px", width: '100%' }}
              />
            </div>
            <div className="col-md-6">
              <img
                src={content.Home_Photo.Shower}
                className="img-fluid"
                style={{ borderRadius: "0 15px 0 0", height: '200px' }}
              />
            </div>
            <div className="col-md-6 pe-0">
              <img
                src={content.Home_Photo.Kitchen}
                className="img-fluid pb-2"
                style={{ height: "210px" }}
              />
            </div>
            <div className="col-md-6">
              <img
                src={content.Home_Photo.Toilet}
                className="img-fluid"
                style={{ borderRadius: "0 0 15px 0", height: '200px' }}
              />
            </div>
          </div>
        </div>
        <div className="house-details py-5">
          <h2 className="house-type">Home Type: {content.Home_Type}</h2>
          <div className="house-info">
            <p className="house-info-item">
              <span className="info-label">City: </span> {content.City}
            </p>
            <p className="house-info-item">
              <span className="info-label">Sub City: </span> {content.Sub_City}
            </p>
            <p className="house-info-item">
              <span className="info-label">Kebele: </span> {content.Kebele}
            </p>
            <p className="house-info-item">
              <span className="info-label">Wereda: </span> {content.Wereda}
            </p>
            <p className="house-info-item">
              <span className="info-label">Price: </span> {content.Price}
            </p>
            <p className="house-info-item">
              <span className="info-label">Size: </span> {content.Size}
            </p>
            <p className="house-info-item">
              <span className="info-label">Lessor:</span>{" "}
              {`${content.lesser.First_Name} ${content.lesser.Last_Name}`}
            </p>
          </div>
        </div>
        <LikeButtonCompoent />
      </div>
    );
}