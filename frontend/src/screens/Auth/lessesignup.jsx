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
    First_Name: "",
    Last_Name: "",
    User_Name: "",
    Password: "",
    region: "",
    zone: "",
    wereda: "",
    city: "",
    Email: "",
    Phone_Number: "",
  };

  const validationSchema = Yup.object().shape({
    User_Name: Yup.string()
      .test(
        "len",
        "The User_Name muste be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This filed is required!"),
    Email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required"),
    Password: Yup.string()
      .test(
        "len",
        "The Password must be between 6 and 40 characters",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 40
      )
      .required("This filed is required!"),
  });

  const handleRegister = (formValue) => {
    const { First_Name, Last_Name, User_Name, Email, Password, Phone_Number } =
      formValue;

    setSuccessful(false);
    console.log(Phone_Number, First_Name);
    dispatch(
      lesseeRegister({
        First_Name,
        Last_Name,
        User_Name,
        Email,
        Password,
        Phone_Number,
      })
    )
      .unwrap()
      .then(() => {
        setSuccessful(true);
      });
  };

  if (successful) {
    return <Navigate to="/login" />;
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
                  <label htmlFor="First_Name">First Name</label>
                  <Field
                    name="First_Name"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="First_Name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Last_Name">Last Name</label>
                  <Field
                    name="Last_Name"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="Last_Name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="User_Name">User_Name</label>
                  <Field
                    name="User_Name"
                    type="text"
                    className="form-control"
                  />
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
                  <label htmlFor="Phone_Number">Phone No</label>
                  <Field
                    name="Phone_Number"
                    type="text"
                    className="form-control"
                  />
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
