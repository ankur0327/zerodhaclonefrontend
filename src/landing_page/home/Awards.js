import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Broker'/>
                </div>
                <div className='col-6 p-4 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity
                         investments and  contribute to 15% of daily retail exchange volumes in India.</p>

                         <div className='row'>
                            <div className='col-6'>
                            <ul >
                        <li className='mb-2'>Future And Options</li>
                        <li className='mb-2'>Comodity Derivatives</li>
                        <li className='mb-2'>Currency Derivatives</li>
                        </ul>  
                            </div>
                            <div className='col-6'>
                            <ul>
                        <li className='mb-2'>Stock & IPOs</li>
                        <li className='mb-2'>Direct Mutual Funds</li>
                        <li className='mb-2'>Bonda And Gov. Securitise</li>
                        </ul>  
                            </div>
                         </div>
                       <img src='media/images/pressLogos.png' alt='pressLogo' style={{width:"90%",marginTop:"30px" }}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;