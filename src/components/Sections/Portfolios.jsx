import React, { useEffect, useState } from "react";
import { API_URL } from "./../../utils";
import axios from "axios";
import Portfolio from "../Items/Portfolio";

function Portfolios() {
  const [allItems, setAllItems] = useState();
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/portfolios?populate=*`).then((res) => {
      setAllItems(res.data?.data);
      setVisibleItems(res.data?.data);
      setActiveFilter("all projects");
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/portfolio-categories`).then((res) => {
      setCategory(res.data?.data);
    });
  }, []);

  const handleChange = (name) => {
    console.log(name, "target valueeee");
    setActiveFilter(name.toLowerCase());

    if (name.toLowerCase() === "all projects") {
      setVisibleItems(allItems);
    } else {
      const tempData = allItems.filter((data) => {
        return data.attributes.category.includes(name.toLowerCase());
      });
      setVisibleItems(tempData);
    }
    // let tempData;
    // if (targetFilter === filters[0].name.toLowerCase()) {
    //   tempData = allItems.filter((data) => data.id <= dataVisibleCount);
    // } else {
    //   tempData = allItems.filter((data) => {
    //     return (
    //       data.category.includes(targetFilter) && data.id <= dataVisibleCount
    //     );
    //   });
    // }

    // setVisibleItems(tempData);
  };

  // const handleLoadmore = (e) => {
  //   e.preventDefault();
  //   let tempCount = dataVisibleCount + dataIncrement;

  //   if (tempCount > allItems.length) {
  //     setNoMorePost(true);
  //   } else {
  //     setDataVisibleCount(tempCount);
  //     if (activeFilter === filters[0].name.toLowerCase()) {
  //       setVisibleItems(allItems.filter((data) => data.id <= tempCount));
  //     } else {
  //       let items = allItems.filter((data) => {
  //         return data.category.includes(activeFilter) && data.id <= tempCount;
  //       });
  //       setVisibleItems(items);
  //     }
  //   }
  // };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {category?.map((filter) => (
          <li
            className={
              filter?.attributes?.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter?.id}
            onClick={() => handleChange(filter?.attributes?.name)}
          >
            {filter?.attributes?.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {category?.map((filter) => (
            <option value={filter?.attributes?.name} key={filter?.id}>
              {filter?.attributes?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems?.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolios;
