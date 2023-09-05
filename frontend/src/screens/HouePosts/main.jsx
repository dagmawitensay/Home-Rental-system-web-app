import React, { useState } from "react";
import "./post.css";
import HouseInfoForm from "./houseinfoform";
import { useDispatch, useSelector } from "react-redux";
import HouseImageForm from "./houseimagefrom";
import { registerHouse } from "../../slices/homes";

export default function HouseRegistrationForm() {
  const initialValues = {
    step: 1,
    houseType: "",
    size: 0,
    price: 0,
    date: Date(),
    city: "",
    subCity: "",
    kebele: "",
    Wereda: "",
    zone: "",
    houseNo: 0,
    door: null,
    floor: null,
    wall: null,
    roof: null,
    toilet: null,
    kitchen: null,
    shower: null,
    houseLicence: null,
  };

  
  const [currState, setState] = useState({
    step: 1,
    houseType: "",
    size: 0,
    price: 0,
    date: Date(),
    city: "",
    subCity: "",
    kebele: "",
    Wereda: "",
    zone: "",
    houseNo: 0,
    door: null,
    floor: null,
    wall: null,
    roof: null,
    toilet: null,
    kitchen: null,
    shower: null,
    houseLicence: null,
  });

  const dispatch = useDispatch();


  const prevStep = () => {
    setState((prevValues) => {
        return {
            ...prevValues,
            ['step'] : prevValues.step - 1
        }
    })
  };

  const nextStep = () => {
    setState((prevValues) => {
        return {
            ...prevValues,
            ['step'] : prevValues.step + 1
        }
        
    })
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setState((prevValues) => {
        return {
            ...prevValues,
            [name] : value
        }
    })
  }

  const handleSubmit = () => {
    console.log(currState);
   
    dispatch(
      registerHouse({
        currState
      })
    )
      .unwrap()
      .then((response) => {
        console.log(response)
        // navigate("/properties");
        // window.location.reload();
        // console.log("to change");
      })
      .catch(() => {
        // setLoading(false);
      });
  }

    const { step } = currState;
  const {
    houseType,
    size,
    price,
    date,
    city,
    subCity,
    kebele,
    Wereda,
    zone,
    houseNo,
    door,
    floor,
    wall,
    roof,
    toilet,
    kitchen,
    shower,
    houseLicence,
  } = currState;

  const values = {
    houseType,
    size,
    price,
    date,
    city,
    subCity,
    kebele,
    Wereda,
    zone,
    houseNo,
    door,
    floor,
    wall,
    roof,
    toilet,
    kitchen,
    shower,
    houseLicence,
  };
  return (
    <main className="m-auto pt-5">
      <form method="post" encType="multipart/form-data" id="houseregister">
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
            </div>
            <div className="col-md-9 register-right">
              {/* <ul
                className="nav nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    House
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    {" "}
                    Photo
                  </a>
                </li>
              </ul> */}
              <div className="tab-content" id="myTabContent"></div>
              {step == 1 ? (
                <HouseInfoForm
                  handleChange={handleChange}
                  nextStep={nextStep}
                  values={values}
                />
              ) : (
                <HouseImageForm
                  prevStep={prevStep}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  values={values}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
