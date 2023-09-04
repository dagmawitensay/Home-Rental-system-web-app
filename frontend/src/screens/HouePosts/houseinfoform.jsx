import React, { Component } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function HouseInfoForm({ nextStep, handleChange, values }) {
  function Continue(e) {
    console.log("inside continuew")
    e.preventDefault();
    nextStep()
  }
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h3 className="register-heading">Register Your House</h3>
        <div className="row register-form">
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="type">House Type</label>
              <input
                type="text"
                id="type"
                name='houseType'
                className="form-control"
                placeholder="House Type *"
                onChange={handleChange}
                value={values.houseType}
              />
            </div>

            <div className="form-group py-2 d-flex flex-column">
              <label for="size">Size</label>
              <input
                type="text"
                id="size"
                name="size"
                className="form-control"
                placeholder="Size in meter square *"
                onChange={handleChange}
                value={values.size}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                className="form-control"
                onChange={handleChange}
                placeholder="Price per month"
                value={values.price}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                onChange={handleChange}
                placeholder="Date *"
                value={values.date}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                onChange={handleChange}
                placeholder="City of your house found"
                value={values.city}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="sub">Sub City</label>
              <input
                type="text"
                id="sub"
                name="subCity"
                className="form-control"
                onChange={handleChange}
                placeholder="Sub-city/Town  your house found"
                value={values.subCity}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="wereda">Wereda</label>
              <input
                type="text"
                id="wereda"
                name="wereda"
                className="form-control"
                onChange={handleChange}
                placeholder="Wereda your house found"
                value={values.wereda}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="kebele">Kebele</label>
              <input
                type="text"
                id="kebele"
                className="form-control"
                name="kebele"
                onChange={handleChange}
                placeholder="Kebele your house found"
                value={values.kebele}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="house_no">House Number</label>
              <input
                type="number"
                id="house_no"
                name="houseNo"
                className="form-control"
                onChange={handleChange}
                placeholder=" your house number"
                value={values.houseNo}
              />
            </div>

            <div className="form-group py-2 d-flex flex-column">
              <Button
                variant="contained"
                className="btnRegister m-auto"
                id="profile-tab"
                onClick={Continue}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
