import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row mt-5">
            <div className="col-6 p-3">
                <img src={imageURL} alt="img" style={{width:"85%"}}/>
            </div>
            <div className="col-6 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div  >
                <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo}</a>
                <a href={learnMore} style={{marginLeft:"50px" ,textDecoration:"none" }}>{learnMore}</a>
                </div>
                <div className="mt-4">
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="img"/></a>
                <a href={appStore} style={{marginLeft:"20px" }}><img src="media/images/appstoreBadge.svg" alt="img"/></a>
               
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default LeftSection;
