import React from 'react'
import "./Explore.css"
import AppLayout from '../../layout/AppLayout'
import explore from '../../images/explore.png'
import chinedu from '../../images/chindeu.png'
import aminat from '../../images/aminat.png'
import amaka from '../../images/chiamaka.png'
import mide from '../../images/olumide.png'
import mo from '../../images/mo.png'
import mohamed from '../../images/mohamed.png'
import sekinat from '../../images/sekinat.png'
import bola from '../../images/tina.png'
import musa from '../../images/musa.png'
import titi from '../../images/titi.png'
import wura from '../../images/wura.png'
import seki from '../../images/zainaba.png'
import {RiStarSFill} from 'react-icons/ri'
import { HiOutlineHeart} from 'react-icons/hi'
import {BiEnvelope} from 'react-icons/bi'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {FaAngleLeft, FaAngleRight, FaAngleDown} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Explore = () => {
    return (
        <AppLayout>
            <div className='explore'>
                <div className='row p-3'>
                    <div className='col-12 p-3 text-center'>
                        <img className='img-fluid' alt='explore' src={explore}></img>
                        <h1 className='explore-heading p-3'>Explore</h1>

                        <div className='form-group col-3 m-auto d-flex border rounded-pill'>
                            <input type='search' className='form-control border-0 exploreInput' placeholder='Search for speaker'></input>
                            <button type='submit' className='exploreBtn'></button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 m-auto p-3 text-center'>
                        <span className='p-3'>Categories: </span>
                        <span className='list p-3'><BsDot/> All</span>
                        <span className='list p-3'><BsDot/> Ceremonial</span>
                        <span className='list p-3'><BsDot/> Persuasive</span>
                        <span className='list p-3'><BsDot/> Informative</span>
                        <span className='list p-3'><BsDot/> Entertaining</span>
                        <span className='list p-3'><BsDot/> Demonstrative</span>
                    </div>

                    <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto p-3 text-center'>
                        <span className='p-3'>Filter: </span>
                        <span className='list p-3'>Topic <FaAngleDown/></span>
                        <span className='list p-3'>Ratings <FaAngleDown/></span>
                        <span className='list p-3'>Location <FaAngleDown/></span>
                    </div>

                </div>

                <div className='row p-5 justify-content-between'>
                    <div className='col-12'>
                        <h3 className='text-center feature-heading'>Featured</h3>
                    </div>
                    <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                        <img alt='speaker' className='img-fluid' src={titi}></img>
                        <div className='card-text text-center'>
                            <h5>Titilayo Chibuike</h5>
                            <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                            <span className='card-icon me-3'><BiEnvelope/></span>
                            <span className='card-icon'><HiOutlineHeart/></span>
                            <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                            <p><AiOutlineCheckCircle/> Career</p>
                            <Link to='/speakerProfile' className='btn btn-success rounded-pill'>Profile</Link>
                        </div>
                    </div>

                    <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                        <img alt='speaker' className='img-fluid' src={sekinat}></img>

                        <div className='card-text text-center'>
                            <h5>Sekinat Ndukwu</h5>
                            <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                            <span className='card-icon me-3'><BiEnvelope/></span>
                            <span className='card-icon'><HiOutlineHeart/></span>
                            <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                            <p><AiOutlineCheckCircle/> Career</p>
                            <button className='btn btn-success rounded-pill'>Profile</button>
                        </div>
                    </div>
                            
                    <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                        <img alt='speaker' className='img-fluid' src={amaka}></img>

                        <div className='card-text text-center'>
                            <h5>Chiamaka Gbadamosi</h5>
                            <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                            <span className='card-icon me-3'><BiEnvelope/></span>
                            <span className='card-icon'><HiOutlineHeart/></span>
                            <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                            <p><AiOutlineCheckCircle/> Career</p>
                            <button className='btn btn-success rounded-pill'>Profile</button>
                        </div>
                    </div>
                            
                    <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                        <img alt='speaker' className='img-fluid' src={aminat}></img>

                        <div className='card-text text-center'>
                            <h5>Aminat Abiola</h5>
                            <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                            <span className='card-icon me-3'><BiEnvelope/></span>
                            <span className='card-icon'><HiOutlineHeart/></span>
                            <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                            <p><AiOutlineCheckCircle/> Career</p>
                            <button className='btn btn-success rounded-pill'>Profile</button>
                        </div>
                    </div>
                </div>

                <div className='row p-5 justify-content-between'>
                        <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                            <img alt='speaker' className='img-fluid' src={bola}></img>

                            <div className='card-text text-center'>
                                <h5>Augustina Mobolaji</h5>
                                <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                <span className='card-icon me-3'><BiEnvelope/></span>
                                <span className='card-icon'><HiOutlineHeart/></span>
                                <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                <p><AiOutlineCheckCircle/> Career</p>
                                <button className='btn btn-success rounded-pill'>Profile</button>
                            </div>
                        </div>
                            
                        <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                            <img alt='speaker' className='img-fluid' src={seki}></img>

                            <div className='card-text text-center'>
                                <h5>Zainab Yakub</h5>
                                <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                <span className='card-icon me-3'><BiEnvelope/></span>
                                <span className='card-icon'><HiOutlineHeart/></span>
                                <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                <p><AiOutlineCheckCircle/> Career</p>
                                <button className='btn btn-success rounded-pill'>Profile</button>
                            </div>
                        </div>
                            
                        <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                            <img alt='speaker' className='img-fluid' src={mide}></img>

                            <div className='card-text text-center'>
                                <h5>Olumide Salami</h5>
                                <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                <span className='card-icon me-3'><BiEnvelope/></span>
                                <span className='card-icon'><HiOutlineHeart/></span>
                                <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                <p><AiOutlineCheckCircle/> Career</p>
                                <button className='btn btn-success rounded-pill'>Profile</button>
                            </div>
                        </div>
                            
                        <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                            <img alt='speaker' className='img-fluid' src={mohamed}></img>
                            <div className='card-text text-center'>
                                <h5>Mohamed Adesina</h5>
                                <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                <span className='card-icon me-3'><BiEnvelope/></span>
                                <span className='card-icon'><HiOutlineHeart/></span>
                                <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                <p><AiOutlineCheckCircle/> Career</p>
                                <button className='btn btn-success rounded-pill'>Profile</button>
                            </div>
                        </div>
                </div>
                        
                <div className='row p-5 justify-content-between'>
                            <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                                <img alt='speaker' className='img-fluid' src={musa}></img>

                                <div className='card-text text-center'>
                                    <h5>Musa Abiodun</h5>
                                    <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                    <span className='card-icon me-3'><BiEnvelope/></span>
                                    <span className='card-icon'><HiOutlineHeart/></span>
                                    <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                    <p><AiOutlineCheckCircle/> Career</p>
                                    <button className='btn btn-success rounded-pill'>Profile</button>
                                </div>
                            </div>
                            
                            <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                                <img alt='speaker' className='img-fluid' src={wura}></img>

                                <div className='card-text text-center'>
                                    <h5>Habiba Wuraola</h5>
                                    <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                    <span className='card-icon me-3'><BiEnvelope/></span>
                                    <span className='card-icon'><HiOutlineHeart/></span>
                                    <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                    <p><AiOutlineCheckCircle/> Career</p>
                                    <button className='btn btn-success rounded-pill'>Profile</button>
                                </div>
                            </div>
                            
                            <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                                <img alt='speaker' className='img-fluid' src={chinedu}></img>

                                <div className='card-text text-center'>
                                    <h5>Mohamed Adesina</h5>
                                    <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                    <span className='card-icon me-3'><BiEnvelope/></span>
                                    <span className='card-icon'><HiOutlineHeart/></span>
                                    <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                    <p><AiOutlineCheckCircle/> Career</p>
                                    <button className='btn btn-success rounded-pill'>Profile</button>
                                </div>
                            </div>
                            
                            <div className='col-12 col-xl-2 col-lg-2 col-md-5 col-sm-5 card my-3'>
                                <img alt='speaker' className='img-fluid' src={mo}></img>

                                <div className='card-text text-center'>
                                    <h5>Titilayo Chibuike</h5>
                                    <p className='text-center star'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                                    <span className='card-icon me-3'><BiEnvelope/></span>
                                    <span className='card-icon'><HiOutlineHeart/></span>
                                    <p className='m-0'><AiOutlineCheckCircle/> Lifestyle</p>
                                    <p><AiOutlineCheckCircle/> Career</p>
                                    <button className='btn btn-success rounded-pill'>Profile</button>
                                </div>
                            </div>
                </div>

                <div className='row mb-3'>
                    <div className='col-12 text-center'>
                        <FaAngleLeft/>
                            <span className='p-3 active'>1</span>
                            <span className='p-3'>2</span>
                            <span className='p-3'>3</span>
                            <span className='p-3'>4</span>
                            <span className='p-3'>5</span>
                            <span className='p-3'>6</span>
                        <FaAngleRight/>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
export default Explore;