import React from "react";
import { default as cnn } from "classnames";
import { default as nn } from "./finance.module.css";
import { Vendor as Container } from "../../../../components/container/dashContainer";
import { AppButton } from "../../../../components/buttons";

const Finance = () => {
  const container = new Container();
  const getPaid = function cashOut() {
    console.log(`cashout: 602,625`);
  };
  function download() {
    console.log("file is downloading...");
  }
  return (
    <div className={nn.display}>
      {/* top part where the boxes are found */}
      <div className={nn.financeGrid}>
        {/* right size of the board */}
        <div className="nn.rightGridSection">
          <div className={nn.title}>Finances and Overview</div>
          {/* box 1 */}
          {container.renderContainer({
            boxStyle: "boxContainer",
            title: "Total revenue",
            bigText: "602,625",
            bigTextUnit: "FCFA",
            btnTitle: "Cashout",
            onBtnClick: getPaid,
            btnClass: "btn",
          })}
          {/* box 2 */}
          {container.renderContainer({
            boxStyle: "boxContainer",
            title: "Discout Sales",
            bigText: "52",
            bigTextUnit: "Items",
          })}
          {/* box 3 containing 2 other small box */}
          <div className={nn.simpleFlex}>
            {/* small box 1 */}
            {container.renderContainer({
              boxStyle: "boxContainer",
              title: "Positive Review",
              bigText: "163",
              bigTextUnit: "",
            })}
            {/* small box 2 */}
            {container.renderContainer({
              boxStyle: "boxContainer",
              title: "Negative Review",
              bigText: "4",
              bigTextUnit: "",
            })}
          </div>
        </div>
        {/* left side made up of the download btn and the grid boxes */}
        <div className={nn.leftGridSection}>
          {/* download btn */}
          <AppButton
            title="download Financial report"
            onButtonClick={download}
            dashBtnClass="btn"
            otherBtnClass="download"
          />
          {/* the grid boxes */}
          <div>
            {/* the left side */}
            <div>
              {/* box 1 */}
              {container.renderContainer({
                boxStyle: "boxContainer",
                title: "Average customer order amount",
                bigText: "10,600",
                bigTextUnit: "FCFA",
              })}
              {/* box 2 */}
              {container.renderContainer({
                boxStyle: "boxContainer",
                title: "Average recurring cutomers",
                bigText: "251",
                bigTextUnit: "People",
              })}
              {/* box 3 */}
              {container.renderContainer({
                boxStyle: "boxContainer",
                title: "New cutomers",
                bigText: "251",
                bigTextUnit: "People",
                bottomText: "Since January 31st 2023",
              })}
            </div>
            {/* right side (made up of green boxes) */}
            <div>
              {/* box 1 */}
              {container.renderContainer({
                boxStyle: "gBoxContainer",
                title: "Commission fees",
                bigText: "15",
                bigTextUnit: "%",
                bottomTitle: "112,185.5",
                bottomTitleUnit: "FCFA",
              })}
              {/* box 2 */}
              {container.renderContainer({
                boxStyle: "gBoxContainer",
                title: "Advertisement fees",
                gBigText: "2,563.2",
                gBigTextUnit: "FCFA",
                bottomTitle: "6520 advertised product since ",
                bottomTitleUnit: "June 16th 2023",
              })}
            </div>
          </div>
        </div>
      </div>
      {/* the bottom part (out of the grid) show overview of user account */}
      <div className={cnn(nn.boxContainer, nn.bottom)}>
        <span className={nn.spanTitle}>Advertisement fees</span>
        <span className={nn.spanText}>
          Your account has reach
          <span>
            {" "}
            20 <span>%</span>
          </span>
          <span> more</span> people in the last
          <span>
            {" "}
            25 <span> hrs</span>
          </span>
          , <span>16</span> of your products have been saved by users. Overall,
          your store have grown
          <span>
            {" "}
            30 <span>%</span>
          </span>
          in the last
          <span>
            {" "}
            8 <span> days</span>
          </span>
          . Congratulations!
        </span>
      </div>
    </div>
  );
};

export default Finance;
