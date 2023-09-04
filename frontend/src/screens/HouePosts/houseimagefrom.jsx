import React from "react";
import Button from "@mui/material/Button";

export default function HouseImageForm({
  prevStep,
  handleSubmit,
  handleChange,
  values,
}) {
  function Continue(e) {
    e.preventDefault();
    prevStep();
  }

  function Submit(e) {
    e.preventDefault();
    handleSubmit();
  }
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h3 className="register-heading">Upload House Photos</h3>
        <div className="row register-form">
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">Door</label>
              <input
                name="door"
                type="file"
                id="door"
                className="form-control"
                placeholder="Door *"
                onChange={handleChange}
                // value={values.door}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">Floor</label>
              <input
                name="floor"
                type="file"
                id="floor"
                className="form-control"
                placeholder="Floor"
                onChange={handleChange}
                // value={values.floor}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="wall">Wall</label>
              <input
                name="wall"
                type="file"
                id="wall"
                className="form-control"
                placeholder="Wall"
                onChange={handleChange}
                // value={values.wall}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">Roof</label>
              <input
                name="roof"
                type="file"
                id="roof"
                className="form-control"
                placeholder="Roof"
                onChange={handleChange}
                // value={values.roof}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">City</label>
              <input
                name="city"
                type="file"
                id="city"
                className="form-control"
                placeholder="City"
                onChange={handleChange}
                // value={values.city}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">Toilet</label>
              <input
                name="toilet"
                type="file"
                id="toilet"
                className="form-control"
                placeholder="Toilet"
                onChange={handleChange}
                value={values.toilet}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">kitchen</label>
              <input
                name="kitchen"
                type="file"
                id="kitchen"
                className="form-control"
                placeholder="Kitchen"
                onChange={handleChange}
                value={values.kitchen}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">Shower</label>
              <input
                name="shower"
                type="file"
                id="shower"
                className="form-control"
                placeholder="shower"
                onChange={handleChange}
                value={values.shower}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="door">House License</label>
              <input
                name="houseLicense"
                type="file"
                id="houseLicense"
                className="form-control"
                placeholder="houseLicense"
                onChange={handleChange}
                value={values.houseLicense}
              />
            </div>
            <div className="from-group py-2 d-flex align-items-baseline">
              <div className="form-group col-md-5 d-flex align-items-baseline">
                <Button
                  variant="contained"
                  className="btnRegister"
                  id="profile-tab"
                  onClick={Continue}
                >
                  Prev
                </Button>
              </div>
              <div className="form-group col-md-5 d-flex align-items-baseline">
                <Button
                  variant="contained"
                  className="btnRegister"
                  id="profile-tab"
                  onClick={Submit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//   <div
//     className="tab-pane fade show"
//     id="profile"
//     role="tabpanel"
//     aria-labelledby="profile-tab"
//   >
//     <h3 className="register-heading">Upload House Photo</h3>
//     <div className="row register-form">
//       <div className="col-md-6">
//         <div className="form-group">
//           <label for="door">Door</label>
//           <input
//             type="file"
//             id="door"
//             className="form-control"
//             placeholder="Door *"
//             value=""
//           />
//         </div>
// <div className="form-group">
//   <label for="floor">Floor</label>
//   <input
//     type="file"
//     id="floor"
//     className="form-control"
//     placeholder="Floor *"
//     value=""
//   />
// </div>
//         <div className="form-group">
//           <label for="wall">Wall</label>
//           <input
//             type="file"
//             id="wall"
//             className="form-control"
//             placeholder="Wall *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="roof">Roof</label>
//           <input
//             type="file"
//             id="roof"
//             className="form-control"
//             placeholder="Roof *"
//             value=""
//           />
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className="form-group">
//           <label for="toilet">Toilet</label>
//           <input
//             type="file"
//             id="toilet"
//             className="form-control"
//             placeholder="Password *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="kitchen">Kitchen</label>
//           <input
//             type="file"
//             id="kitchen"
//             className="form-control"
//             placeholder="Confirm Password *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="shower">Shower</label>
//           <input
//             type="file"
//             id="shower"
//             className="form-control"
//             placeholder="Confirm Password *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="license">House Licenses</label>
//           <input
//             type="file"
//             id="license"
//             className="form-control"
//             placeholder="Confirm  *"
//             value=""
//           />
//         </div>
//         <button type="submit" className="btnRegister" value="Submit">
//           Submit
//         </button>
//       </div>
//       <div className="text-center" id="error"></div>
//     </div>
//   </div>;
