import React from "react";
import "./interestRatio.scss";

function InterestRatio() {
  return (
    <div className="ratioBox">
      <div className="ratioBoxInfo">
        <div className="title">
          <h2 className="mainTitle">Interest Coverage Ratio</h2>
          <span className="subTitle"><ion-icon name="sync-outline"></ion-icon>16th December 2023</span>
        </div>
        <h1>8.3</h1>
        <div className="timesRatio">
            <p>2.4x times greater than peers</p>
        </div>
      </div>
    </div>
  );
}

export default InterestRatio;
