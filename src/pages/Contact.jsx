import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="cnt">
      <div
        style={{ fontSize: "1.5rem" }}
        className="d-flex justify-content-center align-items-center vh-100 km"
      >
        <div className="ko bg-white p-3 rounded w-50">
          <h2 className="text-center">Quick Contact</h2>
          <p>Contact us today, and get replay with in 24hours!</p>
          <form>
            <div className="mb-3 fnt">
              <label>
                <strong>Name</strong>
              </label>
              <input
                minLength={3}
                maxLength={10}
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                // name="email"
                className="form-control bg-light"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Email</strong>
              </label>
              <input
                required
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control bg-light"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Phone Number</strong>
              </label>
              <input
                required
                type="number"
                placeholder="Enter Number"
                autoComplete="off"
                name="email"
                className="form-control bg-light"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Feedback</strong>
              </label>
              <input
                id="comment"
                required
                type="text"
                placeholder="Enter your feedback"
                autoComplete="off"
                name="feedback"
                className="form-control bg-light"
              />
            </div>
            <div className="sbmt">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
