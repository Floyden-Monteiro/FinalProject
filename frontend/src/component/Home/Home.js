import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import "./style.scss"
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
                    <Col  key={index} className='Free mt-5'>
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

















<tiles class="tiles">
	
	
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">.......Choco Vanilla.......</container>
			</container>
		</content>
	</tile>
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">...........Motichoor..............</container>
			</container>
		</content>
	</tile>
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="https://media.istockphoto.com/photos/black-forest-cherry-cake-picture-id1266720413?b=1&k=20&m=1266720413&s=170667a&w=0&h=EFXsxYLNIaCfJfoY1OQw_FegbNqLyGft2K5EyYqhOO4=" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">........Black Forest ............</container>
			</container>
		</content>
	</tile>
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1.jpg" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">.............Kit Kat ............</container>
			</container>
		</content>
	</tile>
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="data:image/jpeg;base64,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" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">..........Butter Scotch...........</container>
			</container>
		</content>
	</tile>
	<tile class="tile">
		<content class="tile-content">
			<header class="tile-head">
				<strong class="tile-headline"></strong>
			</header>
			<container class="tile-body">
				<picture class="tile-image">
					<img src="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake2.jpg?v=1632141312" alt="a specific image from lorem picsum" loading="lazy"/>
				</picture>
				<container class="tile-text">..............Red Velvet .............</container>
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
