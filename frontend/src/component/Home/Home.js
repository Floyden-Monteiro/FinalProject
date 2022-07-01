import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import imag from '../../images/imag.jpg';
import Card from './card';
import networkImg from './images/network.png';
import logo from './images/logo.jpeg';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';
import featureImg01 from './images/service-01.png';
import featureImg02 from './images/service-02.png';
import featureImg03 from './images/service-03.png';
import himg from './images/i1.jpg';
import ig from './images/imag.jpg';

import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';
import c4 from './images/c4.jpg';
import bc from './images/bac.gif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const featureData = [
    {
      title: 'Quick Delivery',
      imgUrl: featureImg01,
      desc: 'Your package in our safe hands 😋 ',
    },

    {
      title: 'Super Dine In',
      imgUrl: featureImg02,
      desc: ' Eating at home with the best service in town 😋',
    },
    {
      title: 'Easy Pick Up',
      imgUrl: featureImg03,
      desc: 'Your order is ready for pickup at . . .',
    },
  ];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='hh'>
            <div className='hhome' style={{ backgroundImage: `url(${bc})` }}>
              <div
                className='homePage '
                style={{ padding: '10px', backgroundImage: `url(${bc})` }}
              >
                <h1 className='easy pb-4 text-light '>
                  Easy way to make an order
                </h1>

                <p
                  style={{ padding: '10px', fontSize: '18px' }}
                  className='text-light'
                >
                  We enjoy turning cakes into works of art, but we should never
                  forget that cake is food and it’s meant to be delicious! And
                  delicious they are! Help celebrate a special day or
                  commemorate a significant occasion with a sweet treat from
                  CakesnBakes. Whether you are searching for a special birthday
                  cake, or simply looking for a sweet ending to an everyday
                  meal, This website ensure to have something freshly baked to
                  suit your mood.
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                  }}
                  className='btn'
                >
                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: 'bold',
                      border: 'solid white 3px',
                      padding: '5px',
                      color: 'black',
                      borderRadius: '5px',
                      alignItems: 'center',
                    }}
                    to='/products'
                    className='f-5 text-light'
                  >
                    Order Now
                  </Link>
                </p>
              </div>
              <div className='homePage1'></div>
            </div>

            <section>
              <Container>
                <Row>
                  <Col lg='12' className='text-center'>
                    <h5 className='feature__subtitle mb-4 text-light '>What we serve</h5>
                    <h2 className='feature__title text-light'>Just sit back at home</h2>
                    <h2 className='feature__title text-light'>
                      we will <span>take care</span>
                    </h2>
                  </Col>

                  {featureData.map((item, index) => (
                    <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                      <div className='feature__item text-center px-5 py-3 '>
                        <img
                          src={item.imgUrl}
                          alt='feature-img'
                          className='w-25 mb-3'
                        />
                        <h5 className=' fw-bold mb-3 text-light'>{item.title}</h5>
                        <p className='text-light'>{item.desc}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>

            <h2 className='homeHeading text-light'>Featured Cake</h2>
            <div className='container' id='container'>
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <footer className='page-footer font-small blue bg-dark'>
              <div className='footer-copyright text-center py-3 text-light'>
                © 2022 Copyright :
                <Link
                  to='/contact'
                  style={{ textDecoration: 'none', fontSize: '20px' }}
                  className='text-light'
                >
                  {' '}
                  CakesnBakes
                </Link>
                <p>Arvin Suvares - +91 9071920392</p>
              </div>
            </footer>
            {/* <Fade bottom>
            <section>
              <Container>
                <Row>
                  <Col lg='6' md='6'>
                    <div className='hero__content'>
                      <h5 className='mb-3'>Easy way to make an order</h5>
                      <h1 className='mb-4 hero__title'>
                        <span>Looking for Cakes</span> Just waiting <br /> at
                        <span> your door</span>
                      </h1>

                      <p>
                        We enjoy turning cakes into works of art, but we should
                        never forget that cake is food and it’s meant to be
                        delicious! And delicious they are! Help celebrate a
                        special day or commemorate a significant occasion with a
                        sweet treat from CakesnBakes. Whether you are searching
                        for a special birthday cake, or simply looking for a
                        sweet ending to an everyday meal, This website ensure to
                        have something freshly baked to suit your mood.
                      </p>
                    </div>
                  </Col>

                  <Col lg='6' md='6'>
                    <div className='hero__img'>
                      <img
                        src={logo}
                        alt='hero-img'
                        className='w-100'
                        style={{
                          borderRadius: '60%',
                          position: 'relative',
                          top: '-90px',
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Fade>
          <h2 className='homeHeading'>Featured Cake</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <section>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                  <h5 className='feature__subtitle mb-4'>What we serve</h5>
                  <h2 className='feature__title'>Just sit back at home</h2>
                  <h2 className='feature__title'>
                    we will <span>take care</span>
                  </h2>
           
                </Col>

                {featureData.map((item, index) => (
                  <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                    <div className='feature__item text-center px-5 py-3'>
                      <img
                        src={item.imgUrl}
                        alt='feature-img'
                        className='w-25 mb-3'
                      />
                      <h5 className=' fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          <section>
            <Container>
              <Row>
                <Col lg='6' md='6'>
                  <div className='testimonial '>
                    <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                    <h2 className='testimonial__title mb-4'>
                      What our <span>customers</span> are saying
                    </h2>
                    <p className='testimonial__desc'></p>

                   
                  </div>
                </Col>

                <Col lg='6' md='6'>
                  <img
                    src={networkImg}
                    alt='testimonial-img'
                    className='w-100'
                  />
                </Col>
              </Row>
            </Container>
          </section>

    

          <footer className='page-footer font-small blue bg-dark'>
            <div className='footer-copyright text-center py-3 text-light'>
              © 2022 Copyright :
              <Link
                to='/'
                style={{ textDecoration: 'none', fontSize: '20px' }}
                className='text-light'
              >
                {' '}
                Cakesnbakes
              </Link>
            </div>
          </footer> */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
