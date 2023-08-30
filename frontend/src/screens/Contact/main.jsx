import React from 'react';

export default function Body() {
    return(
        <main className='m-auto'>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h1>Contact Us</h1>
                <p>
                    Whether you have a question, feedback, or just want to say hello,
                    we'd love to hear from you. Fill out the form below or contact us
                    using the information on this page, and we'll get back to you as
                    soon as possible.
                </p>
                <form>
                    <div className="mb-3">
                    <label for="name" className="form-label formm">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        style={{height: '50px'}}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label for="email" className="form-label formm">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                        style={{height: '50px'}}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label for="message" className="form-label formm">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        style={{height: '200px'}}
                        required
                    ></textarea>
                    </div>
                    <button type="submit" className="btn  mb-5 btn-lg" style={{backgroundColor: '#2C3A61', color: 'white'}}>
                    Submit
                    </button>
                </form>
                </div>
                <div className="col-md-6">
                <h3 className='pe-5'>Get In Touch</h3>
                <p>
                    If you prefer to reach out to us directly, you can use the
                    information below to get in touch:
                </p>
                <ul className="list-group mb-3">
                    <li className="list-group-item">
                    <i className="bi bi-geo-alt-fill me-2"></i> Arat Killo University,
                    AddisAbaba, Ethiopia
                    </li>
                    <li className="list-group-item">
                    <i className="bi bi-telephone-fill me-2"></i> 09-21-45-36-57
                    </li>
                    <li className="list-group-item">
                    <i className="bi bi-envelope-fill me-2"></i> info@homerental.com
                    </li>
                </ul>
                <img src="./Images/contactus.jpg" alt="Our Office" className="img-fluid mb-3" />
                </div>
            </div>
            </div>
        </main>
    )
}