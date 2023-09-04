import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Navigate } from "react-router";
import { lesserRegister } from "../../slices/auth";
import { clearMessage } from "../../slices/message";


const LesserRegister = () => {
  const [successful, setSuccessful] = useState(false);
  const {message} = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initalValues = {
    First_Name: "",
    Last_Name: "",
    User_Name: "",
    Password: "",
    Region: "",
    Zone: "",
    Wereda: "",
    city: "",
    Email: "",
    Phone_Number: "",
  };

  const validationSchema = Yup.object().shape({
    First_Name: Yup.string().required("This field is required!"),
    Last_Name: Yup.string().required("This field is required!"),
    User_Name: Yup.string()
      .test(
        "len",
        "The User_Name muste be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This filed is required!"),
    Email: Yup.string()
      .email("This is not a valid Email")
      .required("This field is required"),
    Password: Yup.string()
      .test(
        "len",
        "The Password must be between 6 and 40 characters",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 40
      )
      .required("This filed is required!"),
    Region: Yup.string().required("This field is required!"),
    Wereda: Yup.string().required("This field is required!"),
    Zone: Yup.string().required("This field is required!"),
    city: Yup.string().required("This field is required!"),
    Phone_Number: Yup.string().required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const {First_Name,
        Last_Name,
        User_Name,
        Password,
        Region,
        Zone,
        Wereda,
        city,
        Email,
        Phone_Number
  } = formValue;

  setSuccessful(false);
  
  dispatch(
    lesserRegister({
      First_Name,
      Last_Name,
      User_Name,
      Password,
      Region,
      Zone,
      Wereda,
      city,
      Email,
      Phone_Number,
    })
  ).unwrap().then(() => {
    setSuccessful(true);
  })
}

if (successful) {
  return <Navigate to='/login' />
}

return (
  <div className="signup-form">
    <div className="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="First_Name">First Name</label>
                <Field name="First_Name" type="text" className="form-control" />
                <ErrorMessage
                  name="First_Name"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Last_Name">Last Name</label>
                <Field name="Last_Name" type="text" className="form-control" />
                <ErrorMessage
                  name="Last_Name"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="User_Name">User_Name</label>
                <Field name="User_Name" type="text" className="form-control" />
                <ErrorMessage
                  name="User_Name"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <Field name="Email" type="email" className="form-control" />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <Field
                  name="Password"
                  type="Password"
                  className="form-control"
                />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Region">Region</label>
                <Field name="Region" type="text" className="form-control" />
                <ErrorMessage
                  name="Region"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Wereda">Wereda</label>
                <Field name="Wereda" type="text" className="form-control" />
                <ErrorMessage
                  name="Wereda"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Zone">Zone</label>
                <Field name="Zone" type="text" className="form-control" />
                <ErrorMessage
                  name="Zone"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <Field name="city" type="text" className="form-control" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone_Number">Phone No</label>
                <Field name="Phone_Number" type="text" className="form-control" />
                <ErrorMessage
                  name="Phone_Number"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group text-center py-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  style={{ backgroundColor: "#2C3A61", color: "#fff" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </div>

    {message && (
      <div className="form-group">
        <div
          className={successful ? "alert alert-success" : "alert alert-danger"}
          role="alert"
        >
          {message}
        </div>
      </div>
    )}
  </div>
);
}

export default LesserRegister;

// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// export default function LosseSignUPForm() {
//       const [loginInfo, setLoginInfo] = useState({
//         First_Name: "",
//         Last_Name: "",
//         User_Name: "",
//         Password: "",
//         Region: "",
//         Zone: "",
//         Wereda: "",
//         city: "",
//         Email: "",
//         Phone_Number: "",
//       });

//       function handleChange(event) {
//         const { name, value } = event.target;

//         setLoginInfo((prevValue) => {
//           return {
//             ...prevValue,
//             [name]: value,
//           };
//         });
//       }
//   return (
//     <div className="p-5" style={{ backgroundColor: "#5E6994" }}>
//       <form>
//         <MDBContainer fluid className="m-auto w-50 card">
//           <MDBRow>
//             <MDBCol>
//               <div className="d-flex flex-row ps-5 pt-5">
//                 <span className="h1 fw-bold mb-0">Logo</span>
//               </div>
//               <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
//                 <h3
//                   className="fw-normal mb-3 ps-5 pb-3 text-bold"
//                   style={{ letterSpacing: "1px" }}
//                 >
//                   Lesser SignUp
//                 </h3>
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="First Name"
//                   id="First_Name"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Last Name"
//                   id="Last_Name"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Email Adress"
//                   id="First_Name"
//                   type="Email"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   label="User_Name"
//                   id="User_Name"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   label="Password"
//                   id="formControlLg"
//                   type="Password"
//                   onChange={handleChange}
//                   // value={loginInfo.Password}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Region"
//                   id="Region"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Zone"
//                   id="Zone"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Wereda"
//                   id="Wereda"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="City"
//                   id="city"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Phone No"
//                   id="Phone_Number"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.User_Name}
//                   size="lg"
//                 />
//                 <button
//                   className="mb-4 px-5 mx-5 w-100 btn"
//                   style={{ backgroundColor: "#2C3A61", color: "#fff" }}
//                   type="submit"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     console.log(loginInfo);
//                   }}
//                 >
//                   Login
//                 </button>
//                 <p className="small mb-5 pb-lg-3 ms-5">
//                   <a class="text-muted" href="#!">
//                     Forgot Password?
//                   </a>
//                 </p>
//                 <div className="m-auto">
//                   Don't have an account?{" "}
//                   <Link to="lesserSignup" className="row m-auto py-3">
//                     Register as Home Owner
//                   </Link>
//                   <Link to="lesseSignup" className="row m-auto pb-3">
//                     Register as Lesse
//                   </Link>
//                 </div>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </form>
//     </div>
//   );
// }
