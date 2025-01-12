import React from 'react';


function Univerce() {
    return (  
        <div className="container">
        <div className="row  text-center">
            <h1 className='mb-4 fs-2'>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-3 mt-5">
                <img src="media/images/smallcaseLogo.png" alt="img"/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="media/images/streakLogo.png" alt="img" style={{width:"54%"}}/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="media/images/sensibullLogo.svg" alt="img"/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>

            {/* second */}

            <div className="col-4 p-3 mt-5">
                <img src="media/images/tijori.svg" alt="img" style={{width:"52%"}}/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="media/images/zerodhaFundhouse.png" alt="img" style={{width:"55%"}}/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                <img src="media/images/goldenpiLogo.png" alt="img"/>
                <p className='text-muted text-small mt-3'>Thematic investing platform</p>
            </div>
            <button className='btn btn-primary fs-5 mb-5' style={{width:'15%', margin:'0 auto'}}>SignUp Now</button>
        </div>
    </div>
    );
}

export default Univerce;