import React from "react";

/**
 * @param {JSX} component Tool tip component
 * @param {String} message Tool tip message
 * @param {String} position Tool tip position
 * @param {String} bgColor Background color for the tooltip
 * @param {String} textColor Text color for the tooltip
 * @returns
 */
const ToolTip = ({ component, message, position, bgColor, textColor }) => {
  const tooltipStyle = {
    backgroundColor: bgColor || "#303030",
    color: textColor || "#FFFFFF",
  };
  return (
    <div className="tooltip">
      {component}
      <span className={`tooltip__text ${position}`} style={tooltipStyle}>
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
