import React from "react";

function BrojKarege() {
  return (
    <div className="container border-top mb-5">
      <div className="row text-center mt-5 ">
        <div className="col-8">
          <h6 style={{color:"blueviolet"}}>Brokerage Calculator</h6>
          <ul style={{textAlign:"left", fontSize:"13px", lineHeight:"2rem" }} className="text-muted mt-5">

            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            <li>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account</li>
          </ul>
        </div>
        <div className="col-4">
          <h6 style={{color:"blueviolet"}}>List Of Charges</h6>
        </div>
      </div>
    </div>
  );
}

export default BrojKarege;
