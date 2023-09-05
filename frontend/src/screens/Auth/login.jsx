import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { login } from '../../slices/auth';
import { clearMessage } from '../../slices/message';
import { useEffect } from 'react';

const Login = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => {return state.message});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    User_Name: "",
    Password: ""
  }


const validationSchema = Yup.object().shape({
  User_Name: Yup.string().required("This field is required!"),
  Password: Yup.string().required("This field is required!")
});

const handleLogin = (formValue) => {
  const {User_Name, Password} = formValue;
  setLoading(true);

  dispatch(login({ User_Name, Password }))
    .unwrap()
    .then(() => {
      console.log("logged in succey");
    })
    .catch((error) => {
      setLoading(false);
    });
}

if (isLoggedIn) {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  const role = user.user.role;
  switch (role) {
    case 'LESSER':
      return <Navigate to="/uploadedhomes" />
    case 'LESSE':
      return <Navigate to="/properties" />
    case 'ADMIN':
      return <Navigate to="/admin" />
  }
  return <Navigate to="/profile" />
}


return (
  <div className="col-md-12 login-form">
    <div className="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form>
        <div>
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
            <label htmlFor="passowrd">Password</label>
            <Field name="Password" type="password" className="form-control" />
            <ErrorMessage
              name="Password"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="form-group text-center pt-2">
            <button
              type="submit"
              className="btn btn-lg"
              onSubmit={handleLogin}
              disabled={loading}
              style={{ backgroundColor: "#2C3A61", color: "#fff" }}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          </div>
        </Form>
      </Formik>
    </div>
    {message && (
      <div className="form-group">
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      </div>
    )}
  </div>
);
}

export default Login;