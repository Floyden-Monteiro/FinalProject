import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faCartShopping,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

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
