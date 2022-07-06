import React, { Fragment, useEffect } from 'react';

import './Home.css';
import './style.scss';
import ProductCard from './ProductCard.js';

import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

import { Link } from 'react-router-dom';
import featureImg01 from './images/service-01.png';
import featureImg02 from './images/service-02.png';
import featureImg03 from './images/service-03.png';

import bc from './images/bac.gif';

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
                    <h5 className='feature__subtitle mb-4 text-light '>
                      What we serve
                    </h5>
                    <h2 className='feature__title text-light'>
                      Just sit back at home
                    </h2>
                    <h2 className='feature__title text-light'>
                      we will <span>take care</span>
                    </h2>
                  </Col>

                  {featureData.map((item, index) => (
                    <Col key={index} className='Free mt-5'>
                      <div className='feature__item text-center px-5 py-3 '>
                        <img
                          src={item.imgUrl}
                          alt='feature-img'
                          className='w-25 mb-3'
                        />
                        <h5 className=' fw-bold mb-3 text-light'>
                          {item.title}
                        </h5>
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

            <tiles className='tiles'>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      .......Choco Vanilla.......
                    </container>
                  </container>
                </content>
              </tile>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      ...........Motichoor..............
                    </container>
                  </container>
                </content>
              </tile>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://media.istockphoto.com/photos/black-forest-cherry-cake-picture-id1266720413?b=1&k=20&m=1266720413&s=170667a&w=0&h=EFXsxYLNIaCfJfoY1OQw_FegbNqLyGft2K5EyYqhOO4='
                      alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      ........Black Forest ............
                    </container>
                  </container>
                </content>
              </tile>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1.jpg'
                        alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      .............Kit Kat ............
                    </container>
                  </container>
                </content>
              </tile>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://www.fnp.com/images/pr/x/v20210701022318/butterscotch-cake-with-rasmalai-2kg_1.jpg'
                        alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      ..........Butter Scotch...........
                    </container>
                  </container>
                </content>
              </tile>
              <tile className='tile'>
                <content className='tile-content'>
                  <header className='tile-head'>
                    <strong className='tile-headline'></strong>
                  </header>
                  <container className='tile-body'>
                    <picture className='tile-image'>
                      <img
                        src='https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake2.jpg?v=1632141312'
                        alt='cake'
                        loading='lazy'
                      />
                    </picture>
                    <container className='tile-text'>
                      ..............Red Velvet .............
                    </container>
                  </container>
                </content>
              </tile>
            </tiles>

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
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
