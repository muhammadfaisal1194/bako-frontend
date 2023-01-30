import React from "react";
import { ASSET_URL } from "../../utils";

function Portfolio({ portfolio: { id, attributes } }) {
  console.log("nameeeeee", attributes);
  return (
    <a href={`works/${id}/${attributes.slug}`}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{attributes.name}</h4>
          {/* <span className="term">{category.join(",  ")}</span> */}
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img
            src={`${ASSET_URL}${attributes.image.data.attributes.url}`}
            alt={attributes.name}
          />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
