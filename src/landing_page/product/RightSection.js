import React from 'react';


function RightSection({
     imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
}) {
    return ( 
        <div className="container">
        <div className="row p-5 ">
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div  >
                <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo}</a>
                <a href={learnMore} style={{marginLeft:"50px" ,textDecoration:"none" }}>{learnMore}</a>
                </div>
                
            </div>
            <div className="col-6">
                <img src={imageURL} alt="img" style={{width:"95%"}}/>
            </div>

        </div>
    </div>
     );
}

export default RightSection;