import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Speaker1 from '../images/hero1.png';
import Speaker2 from '../images/hero2.png';
import Speaker3 from '../images/hero3.png';
import Speaker4 from '../images/hero4.png';
import '../Components/Navbar/Navbar.css'

function Hero() {
  return (
    <div className='row hero'>
        <div className='col-md-6 heroColLeft'>
            <h2 className='heroHeader'>
                <span className='speakers'>Speakers and event organizers:</span><br/>
                genius comes <br/> in all <span className='heroColor'>colours</span>
                <div class="bendLine"></div>
            </h2>
            <p className='heroText'>
                If your’e tired of being unnoticed.. if you lack confidence in your work.. 
                if you’re seeking for job opportunities.. stop worrying. 
                Spefind has got you covered. We are solely here to widen and expand the genius in you. 
               <span className='fw-bolder'> Are you ready to be discovered?</span>
            </p>
            <Link to='/Signup'  className='getBtn'>
                Get Started
                <BsArrowRight className='ms-2'/>
            </Link>
        </div>
        <div className='col-md-6 heroImage mx-md-auto '>
                <img src={Speaker1} alt='speakers' className='heroImg speaker1 '/>
                <img src={Speaker2} alt='speakers' className='heroImg  position-absolute speaker2'/>
                <img src={Speaker4} alt='speakers' className='heroImg speaker1 speaker4'/>
                <img src={Speaker3} alt='speakers' className='heroImg  position-absolute speaker3'/>

        </div>
    </div>
  )
}

export default Hero