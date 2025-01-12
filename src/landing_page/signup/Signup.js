import React from 'react';

function Signup() {
    return ( 
       <div className='container'>
        <div className='row mt-5 mb-5' >
            <div className='col-8 p-5'>
                <img src="media/images/signup.png" alt='SignUp' style={{width:"90%"}}/>
            </div>
            <div className='col-4 p-5 '>
                <h1 className='fs-2'>Signup now</h1>
                <p>Or track your existing application.</p>
                <div class="input-group flex-nowrap text-center">
                <span class="input-group-text" id="addon-wrapping">+91</span>
                <input type="text" class="form-control" placeholder="Number" aria-label="username"       aria-describedby="addon-wrapping"/>
              </div>
               <p className='mt-2' style={{fontSize:"14px"}}>You will receive an OTP on your number</p>
               <button className='btn btn-primary ' >Submit</button>
            </div>
       </div>
       </div>
     );
}

export default Signup;