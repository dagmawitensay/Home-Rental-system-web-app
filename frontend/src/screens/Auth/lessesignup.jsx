import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router";
import { lesseeRegister } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

const LesseeRegister = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initalValues = {
    fName: "",
    lName: "",
    userName: "",
    password: "",
    region: "",
    zone: "",
    wereda: "",
    city: "",
    email: "",
    phoneNo: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .test(
        "len",
        "The username muste be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This filed is required!"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 40
      )
      .required("This filed is required!"),
  });

  const handleRegister = (formValue) => {
    const {
      fName,
      lName,
      userName,
      password,
      email,
      phoneNo,
    } = formValue;

    setSuccessful(false);

    dispatch(
      lesseeRegister({
        fName,
        lName,
        userName,
        password,
        email,
        phoneNo,
      })
    )
      .unwrap()
      .then(() => {
        setSuccessful(true);
      });
  };

  if (successful){
    return <Navigate to='/login' />
  }

  return (
    <div className="col-md-12 signup-form">
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
                  <label htmlFor="fName">First Name</label>
                  <Field name="fName" type="text" className="form-control" />
                  <ErrorMessage
                    name="fName"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lName">Last Name</label>
                  <Field name="lName" type="text" className="form-control" />
                  <ErrorMessage
                    name="lName"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Username</label>
                  <Field name="userName" type="text" className="form-control" />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">Phone No</label>
                  <Field name="phoneNo" type="text" className="form-control" />
                  <ErrorMessage
                    name="phoneNo"
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
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default LesseeRegister;



// import React, { useState } from "react";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput,
// } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";

// export default function LesseSignUpForm() {
//   const [loginInfo, setLoginInfo] = useState({
//     fName: "",
//     lName: "",
//     userName: "",
//     password: "",
//     region: "",
//     zone: "",
//     wereda: "",
//     city: "",
//     email: "",
//     phoneNo: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setLoginInfo((prevValue) => {
//       return {
//         ...prevValue,
//         [name]: value,
//       };
//     });
//   }
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
//                   Lessee SignUp
//                 </h3>
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="First Name"
//                   id="fName"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.userName}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Last Name"
//                   id="lName"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.userName}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Email Adress"
//                   id="fName"
//                   type="email"
//                   onChange={handleChange}
//                   // value={loginInfo.userName}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   label="Username"
//                   id="username"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.userName}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   label="Password"
//                   id="formControlLg"
//                   type="password"
//                   onChange={handleChange}
//                   // value={loginInfo.password}
//                   size="lg"
//                 />
//                 <MDBInput
//                   wrapperClass="mb-4 mx-5 w-100"
//                   required
//                   label="Phone No"
//                   id="phoneNO"
//                   type="text"
//                   onChange={handleChange}
//                   // value={loginInfo.userName}
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
//                     Forgot password?
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
