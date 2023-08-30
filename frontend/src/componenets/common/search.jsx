import React from 'react';
import Button from './button';
import './search.css';


function SearchBar(props) {
  const width = props.width ? props.width: '100%';
    return (
        <form className="searchbox row m-auto mb-5 mt-2 border-radius p-3 shadow" style={{width: width}}>
            <div className="property col-md-4 border-end border-2">
            <p className="px-3">Locations</p>
            <select className="form-select border-0" aria-label="select by location" id="location">
                <option selected>Search by location</option>
                <option value="1">Bole</option>
                <option value="2">Arada</option>
                <option value="3">Yeka</option>
                <option value="3">Akaki Kaliti</option>
                <option value="3">Kolfe</option>
              </select>
            </div>
            <div className="price col-md-4 border-end border-2">
              <p className="px-3">Home Type</p>
              <select className="form-select border-0" aria-label="property type" id="property">
                <option selected>Search Home Type</option>
                <option value="1">Condominium </option>
                <option value="2">Apartment</option>
                <option value="3">Villa</option>
              </select>
            </div> 
            <div className="d-flex search col-md-4 justify-content-center align-items-center">
                <Button value='Search' class="btn btn-lg rent-btn border-0" id="search" />
            </div>
          </form>
    )
}


export default SearchBar;