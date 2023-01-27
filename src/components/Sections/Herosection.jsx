import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { API_URL, ASSET_URL } from './../../utils';
import axios from "axios";

function Herosection() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/about-mes?populate=*`)
      .then(res => {
        setUserData(res.data?.data[0]?.attributes)
      })
  }, []);

  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: `url(${ASSET_URL}${userData?.backgroundImage?.data?.attributes?.url})` }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {userData?.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{userData?.description}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
