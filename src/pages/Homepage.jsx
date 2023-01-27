import React, { useEffect, useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Contact from "../components/Sections/Contact";
import { API_URL } from "../utils";

function Homepage() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/about-mes?populate=*`).then((res) => {
      setUserData(res.data?.data[0]?.attributes);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{userData?.name}</title>
        </Helmet>
      </div>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="My skills" />
          <Skills />
        </section>
      </Element>

      <Element name="section-Resume">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Resume" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
