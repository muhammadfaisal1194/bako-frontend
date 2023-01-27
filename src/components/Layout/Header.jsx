import React, { useEffect, useState } from "react";
import { API_URL, ASSET_URL } from '../../utils';
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

const headerData = {
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/",
    youtue: "https://www.youtube.com/",
    dribbble: "https://dribbble.com/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();
  const [userData, setUserData] = useState();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);


  useEffect(() => {
    axios.get(`${API_URL}/about-mes?populate=*`)
      .then(res => {
        setUserData(res.data?.data[0]?.attributes)
      })
  }, []);


  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={`${ASSET_URL}${userData?.profilePhoto?.data?.attributes?.url}`} alt={userData?.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {userData?.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/" >
            <img src={`${ASSET_URL}${userData?.profilePhoto?.data?.attributes?.url}`} alt={userData?.name} style={{ maxHeight: "5.6rem", maxWidth: "5.6rem", borderRadius: "50%" }} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {userData?.name}
          </Link>

          <span className="site-slogan">{userData?.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Resume
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-graduation"></i>Resume
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Portfolio
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Portfolio
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer ">
            <ul className="social-icons list-inline">
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.facebook} target="_blank" without rel="noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter} target={"_blank"} rel="noreferrer">
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram} target={"_blank"} rel="noreferrer">
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.youtue ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.youtue} target={"_blank"} rel="noreferrer">
                    <FaYoutube />
                  </a>
                </li>
              )}
              {!headerData.social.dribbble ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.dribbble} target={"_blank"} rel="noreferrer">
                    <FaDribbble />
                  </a>
                </li>
              )}
            </ul>

            <span className="copyright">
              &copy; {new Date().getFullYear()} Bako Template
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
