import React from "react";
import "./fundRaised.scss";
import { Pie } from "react-chartjs-2";

function FundRaised({ fundChartData }) {
  return (
    <div className="fundRaisedBox">
      <div className="fundRaisedBoxInfo">
        <div className="title">
          <h2 className="mainTitle">Total Fund Raised</h2>
          <span className="subTitle">
            <ion-icon name="sync-outline"></ion-icon>31 December 2023
          </span>
        </div>
        <h2>₹ 56.62 Cr</h2>
        <div className="fundRaisedChat">
          <Pie
            height={400}
            width={400}
            data={fundChartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: false,
                },
              },
              maintainAspectRatio: true, // Disable the aspect ratio
              aspectRatio: 2.1,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FundRaised;
