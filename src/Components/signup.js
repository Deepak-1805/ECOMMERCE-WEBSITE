import React from 'react';
import './signup.css';
export default function signup(){
    return(
        <>
          <section className='sign-up'>
          <div className='sign'>
          <label htmlFor="Signup" id='top'>Sign Up</label>
          <br/>
          <div className='container'>
              <label htmlFor="FirstName" id='Fname'>First Name</label>
              <br/>
              <input type="text" id="fname" placeholder='Your First Name' />
              <br/>
              <label htmlFor="LastName" id='Lname'>Last Name</label>
              <br/>
              <input type="text" id="lname"placeholder='Your Last Name'/>
              <br/>
              <label htmlFor="phoneNmbers" id='Pnumb'>Mobile Number</label>
              <br/>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Mobile Number'/>
<br/>
<label htmlFor="Email" id='Email'>Email</label>
              <br/>
              <input type="email" id="Em"placeholder='Enter your email' autoComplete='off'/>
              <br/>
              <label htmlFor="Password" id='pass'>Password</label>
              <br/>
              <input type="password" id="pass"placeholder='password'autoComplete='off' />
              <br/>
              <input type="button" value="Register" />
              <br/>
          </div>
         </div>
          </section>
        </>
    )
}