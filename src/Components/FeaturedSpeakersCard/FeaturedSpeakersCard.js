import React from 'react';
import { HiStar, HiOutlineMail, HiOutlineHeart, HiOutlineCheckCircle } from 'react-icons/hi';

const FeaturedSpeakersCard = ({ speakerName, speakerImage }) => {
	return (
		<div className='row'>
			<div className=' card '>
				<img src={speakerImage} alt="speakerImage" className='img-responsive speakerImg' />
				<h4 className='mt-3'>{speakerName}</h4>
				<div >
					<HiStar className="starRating"/>
					<HiStar className="starRating"/>
					<HiStar className="starRating"/>
					<HiStar className="starRating"/>
					<HiStar className="starRating"/>
				</div>
				<div>
					<HiOutlineMail className="mailHeart my-2"/>
					<HiOutlineHeart className="mailHeart my-2"/>
				</div>

				<p >
					<HiOutlineCheckCircle className='check'/>
					<span className='checkText'>Lifestyle</span>
				</p>
				<p >
					<HiOutlineCheckCircle className='check1'/>
					<span className='checkText'>Career</span>
				</p>
				<button className="card-button">Profile</button>
			</div>
		</div>
	);
};

export default FeaturedSpeakersCard;
