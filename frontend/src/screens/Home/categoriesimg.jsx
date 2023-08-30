import React from 'react';
import './categories.css';

export default function CategoryImage(props) {
    return (
        <div class="col-md-4 pb-4 area-img text-center">
              <img class="img-fluid" src={props.imageUrl} alt="" />
              <h4 class="text-light">{props.name}</h4>
              <p class="amounts text-light">{props.amount} listings</p>
        </div>
    )
}