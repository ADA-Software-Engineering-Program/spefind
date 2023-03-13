import React from 'react';
import AppLayout from '../../layout/AppLayout';
import './About.css';
import aboutpageimage from '../../images/aboutpageimg.png';
import udoka from "../../images/udoka.png"
import Aisha from "../../images/Aisha.png"
import Coletta from "../../images/Coletta.png"
import teamprofile from "../../images/teamprofile.png"
import Ourvalue from "./Ourvalue";
import data from "./Valuedata"
// import rectangle from '../../images/Rectangle.png';

export default function About(){

   const ourValue = data.map(item =>{
      return ( 
          <Ourvalue 
            key={item.id}
            item={item}
          />
      )
  })

    return ( 
      <AppLayout> 
         <div>
            {/* Hero section */}
            <div className="herosection">
                  <h1 className="aboutheading">Spe<span className="heroColor">find</span></h1>
                  <p className="aboutsubheading">
                  <span className='fw-bolder'>The world's first and largest community platform. </span>
                  <br />
                  
                  Spefind is an online booking platform that allows event organizers to book speakers for their events seamlessly. Our platform is a one-stop platform that makes it easy for organizers to find and book the right speakers for their events hereby saving them time and money while ensuring the highest level of quality and customer satisfaction. </p>
               
                  <div className='aboutimg'> 
                  <img src={aboutpageimage} alt='img' className='aboutimg img-fluid'/>
                  </div>
            </div>

            {/* Our Values */}

            <div className="values">
                <h2 className="valueheading p-5 ">Our Values</h2>
                <div className='row'>
                  {ourValue}
                </div>
            </div>

            {/* Vision and Mission */}

            <div className="visionandmission">
            
              <div className="vision">
                <h3 className="visiontitle mb-3">Our Vision</h3>
                <p className="visionsubtitle">To be the premier platform for event and conference organizers to find and book the best speakers, making the process seamless and stress-free.</p>
              </div>
              
              <div className="vision">
                <h3 className="visiontitle mb-3">Our Mission</h3>
                <p className="visionsubtitle">To provide a comprehensive and user-friendly platform for event and conference organizers to discover, book, and manage their speaker line-up. We aim to simplify the process of finding and booking speakers while ensuring the highest level of quality and customer satisfaction.</p>
              </div>

            </div>

            {/* Meet the team */}

            <div className="team">
              <div>
                  <h2 className='teamtitle mb-3'>Meet The Team</h2>
                  <p className='teamsubtitle mb-3'>We are a small group of techies based in Nigeria, trying to bring about ease for event organizers. We have been working on this project for a while and we are really excited we get to share our work with the world. We are proudly products of The Ada Project and we believe in building a brand from the ground up with persistence and passion. So therefore you should be rest assured that we have got you covered!</p>
              </div>

              <div className='teammembers row'>
                
                  <div className='col-lg-4 text-center mt-5'>
                    <img src={udoka} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Udoka Success Etus</p>
                    <p className='teamrole'>Product Manager</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={Aisha} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Rabiu Aisha Kemi</p>
                    <p className='teamrole'>Product Designer</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={Coletta} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Coletta Ezeagba</p>
                    <p className='teamrole'>Product Designer</p> 
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Ugochukwu Nnelly</p>
                    <p className='teamrole'>Product Manager</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Nengi Aberenika</p>
                    <p className='teamrole'>Data Analyst</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Assyah Ibraheem</p>
                    <p className='teamrole'>Product Designer</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Nnenna Lucy</p>
                    <p className='teamrole'>Data Analyst</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Zainah Saheed</p>
                    <p className='teamrole'>Frontend developer</p>
                  </div>

                  <div className='col-lg-4 text-center mt-5'>
                    <img src={teamprofile} alt='teamimg' className='teamimg'/>
                    <p className='teamname mt-4'>Nnoli Armstrong</p>
                    <p className='teamrole'>Data Analyst</p>
                  </div>

              </div>
                
            </div>

         </div>   
    </AppLayout> 
    );
}