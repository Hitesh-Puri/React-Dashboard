import React from "react";
import "./currentLoan.scss";
import { banks } from "../../utility/data";

function CurrentLoan() {

  return (
    <div className="bank-list-container">
      <div className="title">
        <h3 className="mainTitle">Current Loans</h3>
        <span className="subTitle"><ion-icon name="sync-outline"></ion-icon>1 December 2023</span>
      </div>
      <h1>₹ 24 Cr</h1>
      {banks.map((bank) => (
        <div key={bank.id} className="bank-item">
          <img
            src={bank.image}
            alt={`${bank.name} logo`}
            className="bank-logo"
          />
          <div className="bank-details">
            <div className="bank-name">{bank.name}</div>
            <div className="interest-rate">
              <strong style={{color: "black"}}>{bank.interestRate}%</strong> Interest Rate
            </div>
          </div>
          <div className="loan-amount-space">{bank.loanAmount} cr</div>
        </div>
      ))}
    </div>
  );
}

export default CurrentLoan;
