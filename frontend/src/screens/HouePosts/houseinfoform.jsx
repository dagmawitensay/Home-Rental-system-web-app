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
                name='Home_Type'
                className="form-control"
                placeholder="House Type *"
                onChange={handleChange}
                value={values.Home_Type}
              />
            </div>

            <div className="form-group py-2 d-flex flex-column">
              <label for="Size">Size</label>
              <input
                type="text"
                id="Size"
                name="Size"
                className="form-control"
                placeholder="Size in meter square *"
                onChange={handleChange}
                value={values.Size}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Price">Price</label>
              <input
                type="text"
                id="Price"
                name="Price"
                className="form-control"
                onChange={handleChange}
                placeholder="Price per month"
                value={values.Price}
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
              <label for="City">City</label>
              <input
                type="text"
                id="City"
                name="City"
                className="form-control"
                onChange={handleChange}
                placeholder="City of your house found"
                value={values.City}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="sub">Sub City</label>
              <input
                type="text"
                id="sub"
                name="Sub_City"
                className="form-control"
                onChange={handleChange}
                placeholder="Sub-City/Town  your house found"
                value={values.Sub_City}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Wereda">Wereda</label>
              <input
                type="text"
                id="Wereda"
                name="Wereda"
                className="form-control"
                onChange={handleChange}
                placeholder="Wereda your house found"
                value={values.Wereda}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Kebele">Kebele</label>
              <input
                type="text"
                id="Kebele"
                className="form-control"
                name="Kebele"
                onChange={handleChange}
                placeholder="Kebele your house found"
                value={values.Kebele}
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
