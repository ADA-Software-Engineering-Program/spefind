import React from 'react';
import { HiStar } from 'react-icons/hi';

const ReviewCard = ({profilePic, speakerName, occupation, review})=> {
  return (
    <div className='text-start reviewCards'>
        <div className='d-flex'>
            <img src={profilePic} alt='profilePics' className='img-responsive profilePics'/>
            <div className='ms-2 mt-4'>
                <h6 className='fw-semibold'>{speakerName}</h6>
                <p className='designation'>{occupation}</p>
            </div>
        </div>
        <div className='reviewDetail'>
            <div >
                <HiStar className="starRating"/>
                <HiStar className="starRating"/>
                <HiStar className="starRating"/>
                <HiStar className="starRating"/>
                <HiStar className="starRating"/>
            </div>
            <p className='reviewDetailText'>{review}</p>
        </div>

    </div>
  )
}

export default ReviewCard