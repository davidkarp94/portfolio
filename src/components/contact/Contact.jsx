import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbkcjj9', 'template_gblcf1m', form.current, 'wntF0CvT3VIynqHd2');

    setStatus('visible');
    setTimeout(() => {
      setStatus('');
    }, 3000);
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>davidkarp94@gmail.com</h5>
            <a href="mailto:davidkarp94@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>David Karp</h5>
            <a href="https://www.linkedin.com/in/david-karp-a75624225/" target='_blank'>Go To My Linkedin Profile</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+54 9 11 50943302</h5>
            <a href="https://wa.me/+5491150943302" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='form-button__container'>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            <h5 className={`message-sent ${status === 'visible' ? 'visible' : ''}`}>Message Sent!</h5>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact