import React, { useState } from "react";
import { Vendor } from "../../../components/icons";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/logos";
import { default as cnn } from "classnames";
import { default as nn } from "./vendor_pannel.module.css";
import { FaSearch } from "react-icons/fa";

const Panel = () => {
  var panelOption = [
    "dashboard",
    "listings",
    "orders",
    "finances",
    "marketing",
    "settings",
  ];
  const icon= new Vendor()
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className={nn.bar}>
      {/* top part (logo and searchbar) */}
      <div className={nn.top}>
        <img src={logo.logo_l} alt="" />
        <div className={nn.searchBar}>
          <FaSearch size={16} className={nn.searchIcon} />
          <input type="search" name="" id="" placeholder="search here" />
        </div>
      </div>
      {/* pannel buttons */}
      <div className={nn.panelBtn}>
        <li>
          {/* dasboard btn */}
          {panelOption.map((option, index) => (
            <Link
              onClick={() => setActiveIndex(index)}
              className={nn.btnLink}
              to={"/" + option}
              key={option}>
              <ul
                className={
                  activeIndex === index ? cnn(nn.btn, nn.active) : nn.btn
                }>
                {icon.getPannelIcon(option,index,activeIndex)}
                {option}
              </ul>
            </Link>
          ))}
        </li>
      </div>
    </div>
  );
};

export default Panel;
