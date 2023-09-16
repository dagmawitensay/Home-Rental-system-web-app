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
              <label for="Door">Door</label>
              <input
                name="Door"
                type="file"
                id="Door"
                className="form-control"
                placeholder="Door *"
                onChange={handleChange}
                // value={values.Door}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Floor">Floor</label>
              <input
                name="Floor"
                type="file"
                id="Floor"
                className="form-control"
                placeholder="Floor"
                onChange={handleChange}
                // value={values.Floor}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Wall">Wall</label>
              <input
                name="Wall"
                type="file"
                id="Wall"
                className="form-control"
                placeholder="Wall"
                onChange={handleChange}
                // value={values.Wall}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Roof">Roof</label>
              <input
                name="Roof"
                type="file"
                id="Roof"
                className="form-control"
                placeholder="Roof"
                onChange={handleChange}
                // value={values.Roof}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2 d-flex flex-column">
              <label for="Toilet">Toilet</label>
              <input
                name="Toilet"
                type="file"
                id="Toilet"
                className="form-control"
                placeholder="Toilet"
                onChange={handleChange}
                // value={values.Toilet}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Kitchen">Kitchen</label>
              <input
                name="Kitchen"
                type="file"
                id="Kitchen"
                className="form-control"
                placeholder="Kitchen"
                onChange={handleChange}
                // value={values.Kitchenn}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Shower">Shower</label>
              <input
                name="Shower"
                type="file"
                id="Shower"
                className="form-control"
                placeholder="Shower"
                onChange={handleChange}
                // value={values.Shower}
              />
            </div>
            <div className="form-group py-2 d-flex flex-column">
              <label for="Door">House License</label>
              <input
                name="houseLicense"
                type="file"
                id="houseLicense"
                className="form-control"
                placeholder="houseLicense"
                onChange={handleChange}
                // value={values.houseLicense}
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
//           <label for="Door">Door</label>
//           <input
//             type="file"
//             id="Door"
//             className="form-control"
//             placeholder="Door *"
//             value=""
//           />
//         </div>
// <div className="form-group">
//   <label for="Floor">Floor</label>
//   <input
//     type="file"
//     id="Floor"
//     className="form-control"
//     placeholder="Floor *"
//     value=""
//   />
// </div>
//         <div className="form-group">
//           <label for="Wall">Wall</label>
//           <input
//             type="file"
//             id="Wall"
//             className="form-control"
//             placeholder="Wall *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="Roof">Roof</label>
//           <input
//             type="file"
//             id="Roof"
//             className="form-control"
//             placeholder="Roof *"
//             value=""
//           />
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className="form-group">
//           <label for="Toilet">Toilet</label>
//           <input
//             type="file"
//             id="Toilet"
//             className="form-control"
//             placeholder="Password *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="Kitchenn">Kitchenn</label>
//           <input
//             type="file"
//             id="Kitchenn"
//             className="form-control"
//             placeholder="Confirm Password *"
//             value=""
//           />
//         </div>
//         <div className="form-group">
//           <label for="Shower">Shower</label>
//           <input
//             type="file"
//             id="Shower"
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
