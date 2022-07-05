import React from 'react';
import './aboutSection.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div class='about-section'>
      <div class='inner-container'>
        <h1>About Us</h1>
        <p class='text'>
          We're dedicated to creating wonderful sweet surprises that you'll
          absolutely love. Without wonderful
          customers like you, our business would never survive. That's why we're
          sure to say "Thank you" to everyone who gives us their business and
          support. We're extremely thankful for our loyal customers and their
          love never falls short.
        </p>
        <p> For any Query please share it here</p>
        <div class='skills'>
          <span >Arwin Suverus</span>
           <Link
                  to='/contact'
                  style={{ textDecoration: 'none', fontSize: '20px' }}>
                   <p> Contact Us</p>
                  
                </Link>

       </div>
      </div>
    </div>
  

    
  );
};

export default About;
