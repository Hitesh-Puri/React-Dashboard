import React from "react";
import "./creditScore.scss";
import { Line } from "react-chartjs-2";

function CreditScore({ chartData }) {
  return (
    <div className="creditScoreBox">
      <div className="creditScoreBoxInfo">
        <div className="title">
          <span className="mainTitle">Credit Score</span>
          <span className="subTitle">
            <ion-icon name="sync-outline"></ion-icon>16 December 2023
          </span>
        </div>
        <div className="creditScoreLine">
          <div className="credScore">
            <span className="credScore">789</span>
            <span>/900</span>
          </div>
          <progress value={789} max={900} />
        </div>
        <div className="creditScoreChat">
          <Line
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                // Apply green gradient effect to the chart background
                background: {
                  color: {
                    linearGradient: {
                      x0: 0,
                      y0: 0,
                      x1: 0,
                      y1: 1,
                    },
                    stops: [
                      { offset: 0, color: "rgba(75,192,192,1)" }, // Start color
                      { offset: 1, color: "rgba(0,255,0,0.1)" }, // End color (adjust alpha as needed)
                    ],
                  },
                },
              },
              maintainAspectRatio: true, // Disable the aspect ratio
              aspectRatio: 2.1, // Set your desired aspect ratio (width/height)
              scales: {
                y: {
                  suggestedMin: 500, // Set your desired minimum value
                  suggestedMax: 900, // Set your desired maximum value
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditScore;
