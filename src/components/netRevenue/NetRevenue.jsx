import React from "react";
import "./netRevenue.scss";
import MixedChart from "./MixedChartRevenue";

function NetRevenue() {
  return (
    <div className="netRevenueBox">
      <div className="netRevenueBoxInfo">
        <div className="title">
          <h2 className="mainTitle">Net Revenue</h2>
          <span className="subTitle">
            <ion-icon name="sync-outline"></ion-icon>16 December 2023
          </span>
        </div>
        <h2>₹ 10.29 Cr</h2>
        <div className="netRevenueChat">
          <MixedChart />
        </div>
      </div>
    </div>
  );
}

export default NetRevenue;
