import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { API_URL, ASSET_URL } from './../../utils';
import axios from "axios";

function About() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/about-mes?populate=*`)
      .then(res => {
        setUserData(res.data?.data[0]?.attributes)
      })
  }, []);

  return (
    <div className="row">
      <div className="col-md-3">
        <img src={`${ASSET_URL}${userData?.profilePhoto?.data?.attributes?.url}`} alt="..." />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{userData?.description}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{userData?.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{userData?.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{userData?.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{userData?.email}</span>
            </p>
          </div>
        </div>
        <a href={`${ASSET_URL}${userData?.cv?.data?.attributes?.url}`} target="_blank" without rel="noreferrer" className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
