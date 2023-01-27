import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { API_URL, ASSET_URL } from "../utils";
import axios from "axios";

function WorkDetails(props) {
  const [meta, setMeta] = useState();
  const title = props.match.params.id;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/portfolios/${title}/?populate=*`)
      .then(res => {
        setMeta(res.data?.data?.attributes)
      })
  }, [title]);

  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <ul className="list-inline portfolio-info mt-0">
          <li className="list-inline-item">
            <i className="icon-user"></i>
            {meta?.clientName}
          </li>
          <li className="list-inline-item">
            <i className="icon-calendar"></i>
            {meta?.completedDate}
          </li>
          <li className="list-inline-item">
            <a
              href={meta?.link}
              target="__blank"
              rel="noopener noreferrer"
            >
              <i className="icon-link"></i>
              {meta?.link}
            </a>
          </li>
        </ul>
        <div>
          <h2>{meta?.name}</h2>
          <img src={`${ASSET_URL}${meta?.image.data.attributes.url}`} style={{ borderRadius: "15px" }} alt="..." />
        </div>
        <div>
          <h4>Overview</h4>
          <p style={{ fontSize: "14px", textAlign: "justify", lineHeight: "1.7" }}>{meta?.overview}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default WorkDetails;
