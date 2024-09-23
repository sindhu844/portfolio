import blog from '../assests/blog.png';
import './Hero.css';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToast.css'
  import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";


export default function Contact(){

  const form = useRef();

  const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParamas = {
        from_name: name,
        from_email: email,
        message: message,
  
      };

  


    emailjs.sendForm('service_9j39h82', 'template_w8ltwgb', form.current, {
        publicKey: 'SEoy9iM9HpvpyGU8V',
      })
      .then(
        () => {
            
            toast.success('Email Sent Successfully');
            setName('');
            setMessage('');
            setEmail('');
                    },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };
    return(
       

 <section className='d-flex flex-column justify-content-center bg-color p-3' id='contact'>
        <form ref={form} onSubmit={sendEmail}>

            <div className='d-flex justify-content-center py-4 text-white'>
                <h1>Contact</h1>
            </div>

            <div className="row contact p-3">
                <div className="col-12 col-lg-6 form-group mb-2 text-white">
                    <label htmlFor="">Name:</label>
                    <input type="name" className='form-control contact-div' name='from_name'  value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-group col-12 col-lg-6 mb-2 text-white">
                    <label htmlFor="">Email:</label>
                    <input type="email" className='form-control contact-div' name='from_email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="col-12 col-lg-6 form-group mb-2 text-white">
                    <label htmlFor="">Message:</label>
<textarea cols="10" rows="10" className='form-control contact-div' name='message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>                </div>

                <div className="col-12 mb-3 text-white">
                    <input type="submit" className='btn text-white' value="Submit" />
                </div>
            </div>
            {/* <div className='pt-3'>
                <h5 className='d-flex flex-row justify-content-center'>Email:<span>sindhu84401@gmail.com</span></h5><br />
                <h5 className='d-flex flex-row justify-content-center'>Contact:<span>8870994077</span></h5>

            </div> */}
</form>
                
        </section>
    )
}