import React, { useEffect, useState } from "react";
import { API_URL } from './../../utils';
import axios from "axios";
import Experience from "../Items/Experience";



function Experiences() {
  const [experience, setExperience] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/experiences`)
      .then(res => {
        setExperience(res.data?.data)
      })
  }, []);
  return (
    <div className="timeline">
      {experience?.map((experience) => (
        <Experience year={experience.attributes.year} degree={experience.attributes.degree} content={experience.attributes.content} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
