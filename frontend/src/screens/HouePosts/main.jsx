import React from 'react';
import './post.css';

export default function Body() {
    return (
        <main className='m-auto pt-5'>
                <form method="post" encType='multipart/form-data' id="houseregister">
<div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"  aria-controls="home" aria-selected="true">House</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab"  data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> Photo</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Register Your House</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="type">House Type</label>
                                            <input type="text" id="type" className="form-control" placeholder="House Type *" value="" />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label for="size">Size</label>
                                            <input type="text" id="size" className="form-control" placeholder="Size in meter square *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="price">Price</label>
                                            <input type="text" id="price" className="form-control"  placeholder="Price per month" value="" />
                                        </div><div className="form-group">
                                            <label for="date">Date</label>
                                            <input type="date" id="date" className="form-control"  placeholder="Date *" value="" />
                                         </div> 
                                        <div className="form-group">
                                            <label for="city">City</label>

                                            <input type="text" id="city" className="form-control" placeholder="City of your house found" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        
                                        <div className="form-group">
                                            <label for="sub">Sub City</label>
                                            <input type="text" id="sub" className="form-control" placeholder="Sub-city/Town  your house found" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="wereda">Wereda</label>
                                            <input type="text" id="wereda" className="form-control" placeholder="Wereda your house found" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="kebele">Kebele</label>
                                            <input type="text" id="kebele" className="form-control" placeholder="Kebele your house found" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="house_no">House Number</label>
                                            <input type="number"id="house_no" className="form-control" placeholder=" your house number" value="" />
                                        </div>
                                       
                                        <div className="form-group">
                                            <a className="nav-link btnRegister me-3" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> Next</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Upload House Photo</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="door">Door</label>
                                            <input type="file" id="door" className="form-control" placeholder="Door *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="floor">Floor</label>
                                            <input type="file" id="floor" className="form-control" placeholder="Floor *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="wall">Wall</label>
                                            <input type="file" id="wall" className="form-control" placeholder="Wall *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="roof">Roof</label>
                                            <input type="file" id="roof"  className="form-control" placeholder="Roof *" value="" />
                                        </div>


                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="toilet">Toilet</label>
                                            <input type="file" id="toilet" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="kitchen">Kitchen</label>
                                            <input type="file" id="kitchen" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="shower">Shower</label>
                                            <input type="file" id="shower" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="license">House Licenses</label>
                                            <input type="file" id="license" className="form-control" placeholder="Confirm  *" value="" />
                                        </div>
                                        <button type="submit" className="btnRegister"  value="Submit">Submit</button>
                                        
                                    </div>
                                    <div className="text-center" id="error"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </form>
        </main>
    )
}