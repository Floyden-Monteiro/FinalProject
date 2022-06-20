import { Rating } from '@material-ui/lab';
import React from 'react';
import profilePng from '../../images/Profile.png';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
   
   

      <div className='cards_wrap'>
        <div className='card_item'>
          <div class='card_inner'>
            <img src={profilePng} alt='User' />
            <div className='role_name'>
              <Rating {...options} />
            </div>
            <div className='real_name'>{review.name}</div>
            <span className='film'>{review.comment}</span>
          </div>
        </div>
      </div>
    
  );
};

export default ReviewCard;
