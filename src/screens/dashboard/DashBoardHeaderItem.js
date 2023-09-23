import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

/**
 * @breif Display a single dashboard header item
 * @param {String} title Title of dashboard header item
 * @param {Number} number Number value of dashboard header item
 * @param {Number} percentage Percentage value of dashboard header item
 * @param {Boolean} increase Whether to increase or decrease
 * @returns {HTML} div
 */
const DashBoardHeaderItem = ({
  title,
  number,
  percentage,
  increase = true,
}) => {
  const nf = new Intl.NumberFormat();
  return (
    <div className="dashboard-header__item">
      <span className="dashboard-header__title">{title}</span>
      <h1 className="dashboard-header__number">{nf.format(number)}</h1>
      <div className="d-flex align-items--center">
        {increase ? (
          <ArrowUpwardOutlinedIcon className="dashboard-header__icon upward" />
        ) : (
          <ArrowDownwardOutlinedIcon className="dashboard-header__icon downward" />
        )}
        <span
          className={`dashboard-header__percentage ms-1 ${
            increase ? "increase" : "decrease"
          }`}
        >
          {percentage} %
        </span>
      </div>
    </div>
  );
};

export default DashBoardHeaderItem;
