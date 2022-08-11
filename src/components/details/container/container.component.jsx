import "./container.styles.scss";

import React from "react";
import LoanOverview from "../loan overview/loan-overview.component";
import Footer from "../footer/footer.component";

function DetailsContainer() {
  return (
    <div className="details-container">
      <div className="details">
        <div className="first-para">
          <p>
            <span className="name">Amanda Alison </span>
            who has identified you as a friend, has sent you a loan reuest. If
            they wrote you an optional message you will see that below.
          </p>
        </div>
        <div className="second-para">
          <p className="heading">
            Optional message from <span className="name">Amanda Alison </span>
          </p>
        </div>

        <div className="faltu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          non quae voluptatibus mollitia iure architecto eaque nesciunt odio
          fugiat. Quas inventore quo, asperiores consequatur nostrum doloribus
          cupiditate quasi assumenda ad.
        </div>

        <div className="third-para">
          <p className="heading">Here are the proposed loan terms</p>
        </div>

        <LoanOverview />

        <div className="cta">
          <p className="cta-para"> <span className="cta-name" >Amanda Alison</span> is waiting for your action!</p>
          <button className="cta-button">Review Loan Request</button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default DetailsContainer;
