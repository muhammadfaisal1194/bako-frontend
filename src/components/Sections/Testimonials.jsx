import React, { useEffect, useState } from "react";
import { API_URL, ASSET_URL } from './../../utils';
import axios from "axios";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

function Testimonials() {
  const [testimonials, setTestimonials] = useState();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios.get(`${API_URL}/testimonials?populate=*`)
      .then(res => {
        setTestimonials(res.data?.data)
      })
  }, []);

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonials?.map((testimonial) => (
          <Testimonial
            content={testimonial.attributes.feedback}
            authorImage={`${ASSET_URL}${testimonial.attributes.image?.data?.attributes?.url}`}
            authorName={testimonial.attributes.name}
            authorStatus={testimonial.attributes.designation}
            key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
