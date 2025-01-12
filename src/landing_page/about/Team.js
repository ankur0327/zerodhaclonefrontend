import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2  text-center ">People</h1>
        <div className="row mt-2 p-5">
          <div className="col-6 p-3 mt-1 text-center">
            <img
              src="/media/images/ankur.jpg"
              alt="images"
              style={{ borderRadius: "100%", width: "60%",  marginBottom:"20px"}}
              
            />
            <h3>Ankur Yadav</h3>
            <p >WellCome</p>
          </div>
          <div className="col-6 mt-1 p-3 fs-6">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry..
              <br></br>
              <br></br>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
              <br></br>
              <br></br>
              Playing basketball is his zen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
