import React, { useEffect, useState } from "react";
import { API_URL } from './../../utils';
import axios from "axios";



function Contact() {
  const initial = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  const [formdata, setFormdata] = useState(initial);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/about-mes?populate=*`)
      .then(res => {
        setUserData(res.data?.data[0]?.attributes)
      })
  }, []);

  const submitHandler = (event) => {

    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      axios.post(`${API_URL}/contact-messages`, {
        "data": {
          "name": `${formdata.name}`,
          "email": `${formdata.email}`,
          "subject": `${formdata.subject}`,
          "message": `${formdata.message}`
        }
      })
        .then((response) => {
          setMessage("You message has been sent!!!");
        }, (error) => {
          console.log(error);
        });

      setFormdata(initial)
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {userData?.phone}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {userData?.email}
          </div>
        </div>
        <div className="contact-info">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Location</h5>
            <span>{userData?.location}</span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={formdata.subject}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.message}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
