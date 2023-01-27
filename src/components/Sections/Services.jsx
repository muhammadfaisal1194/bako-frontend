import React, { useEffect, useState } from "react";
import { API_URL } from './../../utils';
import axios from "axios";
import Service from "../Items/Service";

function Services() {

  const [services, setServices] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/services`)
      .then(res => {
        setServices(res.data?.data)
      })
  }, []);
  return (
    <div className="row -mt-20">
      {services?.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service name={service.attributes.name} content={service.attributes.content} icon={service.attributes.icon} />
        </div>
      ))}
    </div>
  );
}

export default Services;
