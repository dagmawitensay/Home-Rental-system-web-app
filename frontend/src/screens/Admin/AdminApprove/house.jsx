import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { approve } from "../../../slices/admin";
import adminService from "../../../services/admin.service";
import './popup.css';
import Popup from "./popup";

export default function HouseDetail(props) {
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    adminService.getHouseDetail(props.id).then((response) => {
      setContent(response.data);
    });
  }, []);
  function handleApproval(houseId, approvalStatus) {
    dispatch(approve({ houseId, approvalStatus }))
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  }

  console.log(content);
  if (!content.City) {
    return <div>...Loading</div>;
  }
  return (
    <div className="home-details-container">
      <div className="home-details-header">
        <h2>City: {content.City}</h2>
        <p>
          <b>Home Type:</b> &nbsp;{content.Home_Type}
        </p>
      </div>

      <div className="home-details-content">
        <div className="home-details-photos">
          <div className="row pb-5">
            <div className="w-100 pb-4">
              <img
                src={content.Home_Photo.Door}
                style={{ maxWidth: "1000px" }}
                className="rounded"
                alt="Shower"
              />
            </div>
            <div className="col-md-6">
              <img
                src={content.Home_Photo.Kitchen}
                style={{ maxWidth: "500px", height: "100%" }}
                className="rounded"
                alt="Toilet"
              />
            </div>
            <div className="col-md-6">
              <img
                src={content.Home_Photo.Home_license}
                className="rounded"
                style={{ maxWidth: "500px", height: "100%" }}
                alt="HomeLicense"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="home-details-info col-md-6 ">
            <h3>
              <b>Details</b>
            </h3>
            <p>
              <b>Price:</b> &nbsp;{content.Price}
            </p>
            <p>
              <b>Size: </b> &nbsp;{content.Size}
            </p>
            <p>
              <b>Sub City:</b> &nbsp;{content.Sub_City}
            </p>
            <p>
              <b>Wereda:</b> &nbsp;{content.Wereda}
            </p>
          </div>

          <div className="homeInformation-details-owner col-md-6">
            <h3>
              <b>Owner</b>
            </h3>
            <p>
              <b>Name:</b> &nbsp;{content.lesser.First_Name}{" "}
              {content.lesser.Last_Name}
            </p>
            <p>
              <b>Email:</b> &nbsp;{content.lesser.Email}
            </p>
            <p>
              <b>Phone Number:</b> &nbsp;{content.lesser.Phone_Number}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center pb-3">
            <button
              className="btn btn-lg btn-primary"
              onClick={() => {
                handleApproval(content.id, true);
                return setIsOpen(true);
              }}
            >
              Approve
            </button>
            <Popup
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              text="House has been approved successfuly!"
              status={true}
            />
          </div>
          <div className="col-md-6 text-center">
            <button
              className="btn btn-lg btn-primary"
              onClick={() => {
                handleApproval(content.id, null);
                return setIsOpen(true);
              }}
            >
              Disapprove
            </button>
            <Popup
              handleApproval={handleApproval}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              content={content}
              text="House has been disapproved successfuly!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
