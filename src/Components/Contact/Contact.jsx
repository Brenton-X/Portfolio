import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p9xjz3r', 'template_0rdji4n', form.current, {
        publicKey: 'sDFk2llX4V0Xn-ZR2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="email" name='email' className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='message'></textarea>
          <input type="submit" value='Send' className='button' />
          <span>{done && 'Thanks for contacting me!'}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div >
  )
}

export default Contact