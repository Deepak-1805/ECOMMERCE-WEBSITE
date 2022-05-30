import React from 'react';
import './login.css';
export default function Login(){
    return(
    <>
      <section>
          <div className="login">
            <label id='log'>Login</label>
            <br/>
            <div className='ema'>
                <label id="email">Email Address</label>
                <br/>
                <input type='email' name='Email' placeholder="Enter your registered email-id"  required />
            </div>
            <div className='pas'>
                <label id="secret">Password</label>
                <br/>
                <input type='password' name='Password' placeholder="Enter your Password"  required />
            </div>
            <br/>
            <div className='forget'>
            <button id='final'>
                submit
            </button>
            <a href='#' id="checkid">Forget Password ?</a>
            </div>
          </div>
      </section>
    </>
    )
}