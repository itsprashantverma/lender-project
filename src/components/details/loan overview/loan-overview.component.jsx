import "./loan-overview.styles.scss";

import React from "react";

function LoanOverview() {
  return (
    <div className="loan-container">
      <div className="data one">
        <p className="title">Loan Amount</p>
        <p className="value">$3000.00</p>
      </div>
      <div className="hr">&nbsp;</div>
      <div className="data two">
        <p className="title">Loan Duration</p>
        <p className="value">12 Months</p>
      </div>
      <div className="hr">&nbsp;</div>
      <div className="data three">
        <p className="title">Interest Rate</p>
        <p className="value">12 %</p>
      </div>
      <div className="hr">&nbsp;</div>
      <div className="data four">
        <p className="title">Repayment Start Date</p>
        <p className="value">02/27/2022</p>
      </div>
      <div className="hr-window">&nbsp;</div>
      <div className="data last">
        <p className="last-title">Reason for Loan</p>
        <p className="last-value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqu. Ut enim ad
          minim.
        </p>
      </div>
    </div>
  );
}

export default LoanOverview;
