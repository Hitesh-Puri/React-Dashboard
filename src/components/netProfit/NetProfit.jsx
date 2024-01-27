import React from "react";
import "./netProfit.scss";
import MixedChart from "./MixedChart";

function NetProfit() {
  return (
    <div className="netProfitBox">
      <div className="netProfitBoxInfo">
        <div className="title">
          <h2 className="mainTitle">Net Profit</h2>
          <span className="subTitle"><ion-icon name="sync-outline"></ion-icon>31 December 2023</span>
        </div>
        <h2>₹ 1.37 Cr</h2>
        <div className="netProfitChat">
          <MixedChart />
        </div>
      </div>
    </div>
  );
}

export default NetProfit;
