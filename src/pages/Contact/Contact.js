import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
import contact from '../../images/contact-img.png'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {FaEnvelope} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {CiFacebook, CiLinkedin} from 'react-icons/ci'

const Contact = () => {
    return(
        <section className='container-fluid contact pb-3'>
            <Navbar/>
            <div className='row justify-content-center'>
                <div className='col-10 col-xl-4 col-lg-4 col-md-5 col-sm-10 col-xs-10 form-holder p-3 rounded-start shadow'>
                    <h3 className='form-heading p-3'>Get in Touch</h3>
                    <form className='p-3'>
                        <p>We are here for you! How can we help?</p>

                        <div className='form-group mb-3'>
                            <label className='text-start justify-content-start' htmlFor='fullname'>Fullname</label>
                            <input className='form-control m-0' type='text' name='fullname' placeholder='Type here'/>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='text-start justify-content-start' htmlFor='email'>E-mail Adress</label>
                            <input className='form-control' type='email' name='email' placeholder='Type here'/>
                        </div>


                        
                        <label className='text-start justify-content-start m-0'>Tell us anything</label>
                        <div className='form-floating mb-3'>
                            <textarea className='form-control' name='message'/>
                            <label htmlFor='message' className='text-start justify-content-start'>Type here</label>
                        </div>

                        <button className='btn btn-success d-block w-100 m-auto'>Submit</button>
                    </form>
                </div>

                <div className='col-10 col-xl-4 col-lg-4 col-md-5 col-sm-10 col-xs-10 image-holder py-4 rounded-end'>
                    <img className='img-fluid mb-3' alt='contact' src={contact}></img>
                    
                    <p><span className='icons me-3'><BsTelephoneInboundFill/></span> +234 1234567891</p>
                    <p><span className='icons me-3'><FaEnvelope/></span> spefind@gmail.com</p>
                    <p><span className='icons me-3'><IoLocationSharp/></span> 07 Bolanle Road,  Off Ola Street, Lekki Phase 1, Lagos State. Nigeria</p>

                    <span className='socials'><CiFacebook/></span>
                    <span className='socials'><CiLinkedin/></span>
                    <span className='socials'><TiSocialTwitterCircular/></span>
                </div>
            </div>
        </section>
    )
}
export default Contact;