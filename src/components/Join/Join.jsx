import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@testing-library/jest-dom"

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bz2exx4', 'template_bsypsgs', form.current, '_AytdMKd1XwM_RV6P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
        <hr />
            <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
            </div>
              <div>
                  <span>YOUR BODY</span>
                  <span className='stroke-text'> WITH US?</span>
              </div>
        </div>
          <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='enter your email address' />
                <button className="join-j">Join Now</button>

            </form>
          </div>
    </div>
  )
}

export default Join
