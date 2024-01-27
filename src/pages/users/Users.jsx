import React from "react";
import "./users.scss";
import InterestRatio from "../../components/interestRatio/InterestRatio";
import CurrentLoan from "../../components/currentLoan/CurrentLoan";
import CreditScore from "../../components/creditScore/CreditScore";
import { chartData } from "../../utility/data";
import Metrices from "../../components/metrices/Metrices";

function CreditDetails() {
  return (
    <div className="credit-home">
      <div className="box box1">
        <CurrentLoan />
      </div>
      <div className="box box2">
        <InterestRatio />
      </div>
      <div className="box box3">
        <CreditScore chartData={chartData} />
      </div>
      <div className="box box4">
        <Metrices />
      </div>
    </div>
  );
}

export default CreditDetails;
