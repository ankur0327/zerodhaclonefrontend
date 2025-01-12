import React from 'react';


function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/images/education.svg' alt='Education' style={{width:"80%"}}/>
                </div>
                <div className='col-7 p-5'>
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.</p>
                        <a href='#'>Varsity</a>
                        <p className='mt-4'>TradingQ&A, the most active trading and investment community
                             in India for all your market related queries.</p>
                             <a href='#'>TradingQ&A </a>  
                </div>
            </div>
        </div>
       
     );
}

export default Education;