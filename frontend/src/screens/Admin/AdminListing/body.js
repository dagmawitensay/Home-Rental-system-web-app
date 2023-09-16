import React, { useEffect, useState } from 'react';
import adminService from '../../../services/admin.service';
import { useDispatch } from 'react-redux';
import Card from '../../common/card';

export default function AdminListing() {
    const [content, setContent] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
       adminService.getUnaprovedHouses().then((response) => {
        setContent(response.data)
       })
    }, []);
    
    return (
      <div className="m-auto row">
        {content.map((house) => {
          return (
            <Card
              key={house.id}
              id={house.id}
              subCity={house.Sub_City}
              Size={house.Size}
              src={house.Home_Photo.Door}
              price={`${house.Price}`}
              imageId={house.id}
            />
          );
        })}
      </div>
    );
}