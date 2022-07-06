import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer
      className='text-center text-white'
      style={{ backgroundColor: '#f1f1' }}
    >
      <div
        className='text-center text-dark p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright: CakeAndBakes
      </div>
    </footer>
  );
};

export default Footer;
