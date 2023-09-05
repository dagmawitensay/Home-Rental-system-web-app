import React, { useState, useEffect } from "react";
import "./nav.css";
import House from "../../Foo/Home/HouseLine (1).png";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { logout } from "../../slices/auth";
import { Navigate } from "react-router-dom";

export default function NavBar(props) {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showLesserBoard, setShowLesserBoard] = useState(false);
  const [showLesseBoard, setShowLesseBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        <Navigate to="/login" />
      })
      .catch(() => {
  
      });
  }

  useEffect(() => {
    if (currentUser) {
      const role = currentUser.role;
      switch (role) {
        case "LESSER":
          setShowLesserBoard(true);
          break;
        case "ADMIN":
          setShowAdminBoard(true);
          break;
        case "LESSE":
          setShowLesseBoard(true);
          break;
        default:
          setShowLesserBoard(false);
          setShowAdminBoard(false);
          setShowLesseBoard(false);
      }
    } else {
      setShowLesserBoard(false);
      setShowAdminBoard(false);
      setShowLesseBoard(false);
    }
  }, [currentUser]);

  const textColor = props.textcolor ? props.textcolor : "text-light";
  const border = props.textcolor ? "border-black" : "border-light";

  return (
    <div style={{ backgroundColor: props.bg }}>
      <nav className="navbar navbar-expand-lg pt-3">
        <div className="container-fluid">
          <a className="navbar-brand text-light ps-4" href="#">
            <img src={House} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-5">
              <li className="nav-item">
                <Link to={"/"} className={"nav-link active " + textColor}>
                  Home
                </Link>
              </li>
              {showLesseBoard && (
                <li className="nav-item">
                  <Link
                    to={"/properties"}
                    className={"nav-link active " + textColor}
                  >
                    Properties
                  </Link>
                </li>
              )}
              {showLesseBoard && (
                <li className="nav-item">
                  <Link to={"/about"} className={"nav-link active " + textColor}>
                    About Us
                  </Link>
                </li>
              )}
              {showLesseBoard && (
                <li className="nav-item">
                  <Link
                    to={"/contact"}
                    className={"nav-link active " + textColor}
                  >
                    Contact Us
                  </Link>
                </li>
              )}
              {showLesserBoard && (
                <li className="nav-item ">
                  <Link
                    to={"/add"}
                    className={"btn btn-outline " + textColor + " " + border}
                    type="submit"
                  >
                    ADD LISTING
                  </Link>
                </li>
              )}
              {!currentUser && (
                <div className="d-flex">
                  <div className="dropdown nav-item ms-2">
                    <Link
                      className={"btn dropdown-toggle " + textColor}
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign UP
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className={"dropdown-item  bg-secondary " + textColor}
                          to={"/lesserSignup"}
                        >
                          Lesser
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={"dropdown-item  bg-secondary " + textColor}
                          to={"/lesseeSignup"}
                        >
                          Lessee
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <Link
                      to={"/login"}
                      className={"nav-link active " + textColor}
                    >
                      Login
                    </Link>
                  </li>
                </div>
              )}
              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className={"nav-link active " + textColor}>
                    Admin
                  </Link>
                </li>
              )}
              {
                showLesserBoard && (
                  <li className="nav-item">
                    <Link to={"/uploadedhomes"} className={"nav-link active " + textColor}>
                      Uploaded Homes
                    </Link>
                  </li>
                )
              }
              {currentUser && (
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

{
  /* <div className="container m-3">
  <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
    <Route path="/properties" element={<PropertiesScreen />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUsScreen />} />
    <Route path="/add" element={<HousePostScreen />} />
    <Route path="/admin" element={<AdminScreen />} />
    <Route path="/login" element={<Login />} />
    <Route path="lesserSignup" element={<LesserSignupForm />} />
    <Route path="lesseeSignup" element={<LesseSignUpForm />} />
  </Routes>
</div>; */
}
