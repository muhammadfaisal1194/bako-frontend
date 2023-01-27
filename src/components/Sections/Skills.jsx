import React, { useEffect, useState } from "react";
import { API_URL } from './../../utils';
import axios from "axios";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";


function Skills() {
  const [mySkills, setMySkills] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/my-skills`)
      .then(res => {
        setMySkills(res.data?.data)
      })
  }, []);
  return (
    <>
      <p className="mb-0">{mySkills?.content}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {mySkills?.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill name={progress.attributes.name} percentage={progress.attributes.percentage} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
