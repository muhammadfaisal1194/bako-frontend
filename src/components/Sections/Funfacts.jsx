import React, { useEffect, useState } from "react";
import { API_URL } from './../../utils';
import axios from "axios";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";


function Funfacts() {
  const [analytics, setAnalytics] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/project-analytics`)
      .then(res => {
        setAnalytics(res.data?.data)
      })
  }, []);

  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {analytics?.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact title={funfact.attributes.name} count={funfact.attributes.count} icon={funfact.attributes.icon} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
